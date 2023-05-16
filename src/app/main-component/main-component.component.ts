import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { _STOPS } from '../services/constants';
import { DataGetter } from '../services/data-getter';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {

  public static _GLOBAL_STOPS:any=[]
  dataGetter:DataGetter = new DataGetter();
  constructor(router:Router){
    if(localStorage.getItem('UserDetails')){
      
    }
    else{
      router.navigate([''])
    }
  }
  

}
