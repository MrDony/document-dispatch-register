import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataGetter } from '../services/data-getter';
import { _BACKEND_HOST } from '../services/constants';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-incoming-documents',
  templateUrl: './incoming-documents.component.html',
  styleUrls: ['./incoming-documents.component.css']
})
export class IncomingDocumentsComponent {
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
    this.documents = await this.dataGetter.postData(_BACKEND_HOST+"getUserIncomingDocuments",l_userData[0])
    console.log('incoming=',this.documents)
  }

  async recieveDocument(DocumentID:any,i:any){
    let passData = {
      'User':this.userData,
      'DocumentID':DocumentID
    }
    let response = await this.dataGetter.postData(_BACKEND_HOST+"recieveDocumentByUser",passData);
    if(response.done){
      
      NotificationComponent.displayMessage("The document will now be in your recieved section.","Document Recieved")
      this.documents.splice(i,1);
    }
    else{
      NotificationComponent.displayMessage("The document was not recieved (BKERR).","ERROR")
    }
  }
}


