import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { _BACKEND_HOST, _STOPS } from '../services/constants';
import { DataGetter } from '../services/data-getter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-dispatch',
  templateUrl: './new-dispatch.component.html',
  styleUrls: ['./new-dispatch.component.css']
})
export class NewDispatchComponent {


  imageUrl: string='';
  //0 Title  1 Description  2 Path  3 Image  4 Comments
  errors:any={
    'Title':'',
    'Descripton':'',
    'Path':'',
    'Image':'',
    'Comments':''};
  finished:boolean=false;
  form:any;
  path:any=[]
  isDragging = false;
  stops:any;
  userDetails:any;
  document:any;
  imgData:any;

  dataGetter:DataGetter=new DataGetter();

  


  constructor(private router:Router){
    if(localStorage.getItem('UserDetails')){
      this.stops=[]
      

    }
    else{
      router.navigate([''])
    }
  }

  async ngOnInit(){
    let l_stops = await this.dataGetter.postData(_BACKEND_HOST+"getOffices",{'User':localStorage.getItem('UserDetails')});
    for(let i=0;i<l_stops.length;i++){
      this.stops.push(l_stops[i]['OfficeName'])
    }
    console.log(this.stops)

    let userData = {
      'Username':localStorage.getItem('Username'),
      'Password':localStorage.getItem('Password')
    }
    const data = await this.dataGetter.postData(_BACKEND_HOST+"getUserDetails",userData)
    //console.log('User details : ',data[0])
    this.userDetails=data[0];
    console.log(this.userDetails)
    this.path.push(this.userDetails.OfficeTitle)
  }

  addToPath(val:any){
    if(val.length==0)return;
    this.path.push(val);
  }

  removeFromPath(index:any){
    this.path.splice(index,1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.path, event.previousIndex, event.currentIndex);
    this.isDragging = false;
  }

  addStop(i:any){
    this.path.push(this.stops[i]);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      this.imgData=formData;

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
    }
  }

  async submitForm(arg0: string,arg1: string,arg2: string) {
    let err=0;
    if(arg0.length!=0){
      this.errors['Title']='';
    }
    else{
      this.errors['Title']=" Title is manditory ";
      err++;
    }
    if(this.path.length>=2){
      this.errors['Path']='';
    }
    else{
      this.errors['Path']=" Path should have more than 1 stops "
      err++
    }
    if(arg1.length!=0){
      this.errors['Description']='';
    }
    else{
      this.errors['Description']=" Description is required ";
      err++
    }

    if(err>0){return}

    let l_form={ 
      'Title':arg0,
      'Description':arg1,
      'PostedDate': new Date().toISOString().slice(0, 19).replace('T', ' '),
      'CurrentPosition': 0,
      'SentTo':this.path[1],
      'Path':this.path,
      'Image':this.imgData,
      'PostedUsername': localStorage.getItem('Username'),
      'Status':'Dispatched',
      'Comments':arg2
    }


    let resp = await this.dataGetter.postData(_BACKEND_HOST+'postDocument',l_form)
    console.log(resp[0])
    this.document=resp[0];
    console.log("dpc =",this.document)
    this.finished=true;
  }

}

