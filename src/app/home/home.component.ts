import { HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataGetter } from '../services/data-getter';
import { _BACKEND_HOST } from '../services/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  recentDocuments:any;

  userDetails:any;
  dataGetter:DataGetter=new DataGetter();

  dispatchedDocumentsCount:any;
  recievedDocumentsCount:any;
  incomingDocumentsCount:any;
  completedDocumentsCount:any;

  constructor(private router:Router){
    if(localStorage.getItem('UserDetails')){
      //console.log('ls = ',localStorage.getItem('UserDetails'))
      this.userDetails=localStorage.getItem('UserDetails');
      
    }
    else{
      router.navigate([''])
    }
  }
  async ngOnInit(){
    let userData = {
      'Username':localStorage.getItem('Username'),
      'Password':localStorage.getItem('Password')
    }
    const data = await this.dataGetter.postData(_BACKEND_HOST+"getUserDetails",userData)
    //console.log('User details : ',data[0])
    this.userDetails=data[0];
    //console.log(this.userDetails)

    this.setCounts(this.userDetails)

    this.recentDocuments = await this.dataGetter.postData(_BACKEND_HOST+"getRecentFive",this.userDetails)
    console.log("recent: ",this.recentDocuments)

  }

  async setCounts(userData:any){
    let data1 = await this.dataGetter.postData(_BACKEND_HOST+"getUserDispatchedDocumentsCount",userData)
    let data2 = await this.dataGetter.postData(_BACKEND_HOST+"getUserRecievedDocumentsCount",userData)
    let data4 = await this.dataGetter.postData(_BACKEND_HOST+"getUserIncomingDocumentsCount",userData)
    let data3 = await this.dataGetter.postData(_BACKEND_HOST+"getUserCompletedDocumentsCount",userData)

    console.log(data1,data2, data4,data3)
    this.dispatchedDocumentsCount=data1.count;
    this.recievedDocumentsCount=data2.count;
    this.incomingDocumentsCount=data4.count;
    this.completedDocumentsCount=data3.count
  }

  goToNewDispatch(){
    this.router.navigate(['main/new-dispatch'])
  }
  goToDispatched(){
    this.router.navigate(['main/dispatched'])
  }
  goToIncoming(){
    this.router.navigate(['main/incoming'])
  }
  goToRecieved(){
    this.router.navigate(['main/recieved'])
  }
  goToCompleted(){
    this.router.navigate(['main/completed'])
  }
        
}
