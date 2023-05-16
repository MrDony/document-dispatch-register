import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataGetter } from '../services/data-getter';
import { _BACKEND_HOST } from '../services/constants';

@Component({
  selector: 'app-dispatched-documents',
  templateUrl: './dispatched-documents.component.html',
  styleUrls: ['./dispatched-documents.component.css']
})
export class DispatchedDocumentsComponent {
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

    let data1 = await this.dataGetter.postData(_BACKEND_HOST+"getUserDispatchedDocuments",this.userData)
    this.documents=data1;
    console.log('dispatched = ',data1)
    
  }
}
