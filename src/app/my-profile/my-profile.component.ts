import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataGetter } from '../services/data-getter';
import { _BACKEND_HOST } from '../services/constants';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {


  uname:any;
  pass:any;
  nam:any;
  occ:any;
  ot:any;
  userDetails:any;
  dataGetter:DataGetter=new DataGetter();
  editing:any=false;

  constructor(router:Router){
    if(localStorage.getItem('UserDetails')){

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
    console.log('User details : ',data[0])
    this.userDetails=data[0];
    console.log(this.userDetails)

    this.uname=data[0]['Username'];
    this.pass=data[0]['Password'];
    this.nam=data[0]['Name'];
    this.occ=data[0]['Occupation'];
    this.ot=data[0]['OfficeTitle'];

    console.log(this.uname,this.pass,this.nam,this.occ,this.ot)
  }

  async update(password: string,name: string,occupation: string, officeTitle: string) {
    let userData = {
      'Username':localStorage.getItem('Username'),
      'Password':localStorage.getItem('Password')
    }

    let newData ={
      'Username':localStorage.getItem('Username'),
      'Password':password,
      'Name':name,
      'Occupation':occupation,
      'OfficeTitle':officeTitle
    }

    let sendData = {
      'User':userData,
      'NewData':newData
    }
    const data = await this.dataGetter.postData(_BACKEND_HOST+"setUserDetails",sendData)
    this.editing=false;
    localStorage.setItem('Password',password);
    NotificationComponent.displayMessage("Information Update","Your information was updated successfully");
  }
}
