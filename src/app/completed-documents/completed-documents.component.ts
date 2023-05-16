import { Component } from '@angular/core';
import { DataGetter } from '../services/data-getter';
import { Router } from '@angular/router';
import { _BACKEND_HOST } from '../services/constants';

@Component({
  selector: 'app-completed-documents',
  templateUrl: './completed-documents.component.html',
  styleUrls: ['./completed-documents.component.css']
})
export class CompletedDocumentsComponent {

  documents:any;
  dataGetter:DataGetter=new DataGetter();
  userData:any; 
  constructor(router:Router){
    if(localStorage.getItem('UserDetails')){
      this.userData={
        'Username':localStorage.getItem('Username'),
        'Password':localStorage.getItem('Password')
      };
    }
    else{
      router.navigate([''])
    }
  }

  async ngOnInit(){
    let l_userData = await this.dataGetter.postData(_BACKEND_HOST+"getUserDetails",this.userData);
    //console.log(l_userData[0])
    this.userData=l_userData[0];
    this.documents = await this.dataGetter.postData(_BACKEND_HOST+"getUserCompletedDocuments",l_userData[0])
    console.log('incoming=',this.documents)
  }

  
}
