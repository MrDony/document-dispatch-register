import { Component } from '@angular/core';
import { DataGetter } from '../services/data-getter';
import { _BACKEND_HOST } from '../services/constants';
import { Router } from '@angular/router';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  errors:any={
    'Username':'',
    'Password':''
  }
  dataGetter:DataGetter=new DataGetter();

  constructor(private router:Router){}

  
  async signIn(username:string,password:string){
    if(username.length==0) this.errors['Username'] ="Please enter a username"
    if(password.length==0) this.errors['Password'] ="Please enter a password"
    if(username.length==0 || password.length==0) return
    let l_form={
      'username': username,
      'password': password
    }
    const resp = await this.dataGetter.postData(_BACKEND_HOST+'signInUser',l_form)
    console.log(resp)
    if(resp.length>0){
      let data = {
        'Username':resp[0]['Username'],
        'Password':resp[0]['Password']
      }
      this.router.navigate(['main/home']);
      localStorage.setItem('UserDetails',data['Username'])
      localStorage.setItem('Username',data['Username'])
      localStorage.setItem('Password',data['Password'])
    }
    else{
      NotificationComponent.displayMessage("User does not exist, or incorrect password or username.","Sign In Failed")
    }
  }

  
}
