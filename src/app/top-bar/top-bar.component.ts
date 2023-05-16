import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  show:any=false;
  constructor(private router:Router){
  }

  openDropDown(event: Event) {
    
  }
  closeDropDown(event: Event) {
    
  }

  goToHome(){
    this.router.navigate(['main/home']);
  }

  goToNewDispatch(){
    this.router.navigate(['main/new-dispatch'])
  }

  goToMyProfile(){
    this.router.navigate(['main/my-profile'])
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
  goToSearch(){
    this.router.navigate(['main/search'])
  }
  logout(){
    localStorage.clear()
    this.router.navigate([''])
  }
}
