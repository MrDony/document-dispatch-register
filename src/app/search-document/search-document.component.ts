import { Component } from '@angular/core';
import { DataGetter } from '../services/data-getter';
import { Router } from '@angular/router';
import { _BACKEND_HOST } from '../services/constants';

@Component({
  selector: 'app-search-document',
  templateUrl: './search-document.component.html',
  styleUrls: ['./search-document.component.css']
})
export class SearchDocumentComponent {
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


  async search(searchValue:any){
    if(searchValue.length==0)return

    let passData={
      'User':this.userData,
      'Search':searchValue
    }
    let response = await this.dataGetter.postData(_BACKEND_HOST+"searchDocument",passData);
    console.log(response)
    this.documents=response
  }
}
