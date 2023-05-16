import { Component, Inject } from '@angular/core';
import { DataGetter } from '../services/data-getter';
import { Router } from '@angular/router';
import { _BACKEND_HOST } from '../services/constants';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';
import { CommonModule } from '@angular/common'
import { EditDocumentComponent } from '../edit-document/edit-document.component';

@Component({
  selector: 'app-recieved-documents',
  templateUrl: './recieved-documents.component.html',
  styleUrls: ['./recieved-documents.component.css']
})
export class RecievedDocumentsComponent {
  
  documents:any;
  dataGetter:DataGetter=new DataGetter();
  userData:any; 
  constructor(router:Router, public dialog: MatDialog){
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
    this.documents = await this.dataGetter.postData(_BACKEND_HOST+"getUserRecievedDocuments",l_userData[0])
    console.log('incoming=',this.documents)
  }

  editDocument(document: any, index: number) {
    {
      console.log("sending:",document)
      let dcopy= {...this.documents[index]}
      const resp = this.dialog.open(EditDocumentComponent, {
        data: {
          'User':this.userData,
          'Document':dcopy,
        },
      });
      console.log("edit response: ",resp)
    }
    
  }
  async forwardDocument(document: any, index: number) {
    let pass_data={
      'User':this.userData,
      'Document':document
    }
    const response = await this.dataGetter.postData(_BACKEND_HOST+"forwardDocumentByUser",pass_data)
    console.log("forward response:",response)
    if(response.done){
      NotificationComponent.displayMessage("The document was forwared successfully.","Document Forwarded")
      this.documents.splice(index,1);
    }
    else{
      NotificationComponent.displayMessage("The document was not forwared (BKERR).","ERROR")
    }
  }

  async completeDocument(document: any, index: number) {
    let pass_data={
      'User':this.userData,
      'Document':document
    }
    const response = await this.dataGetter.postData(_BACKEND_HOST+"completeDocumentByUser",pass_data)
    console.log("forward response:",response)
    if(response.done){
      NotificationComponent.displayMessage("The document was completed successfully.","Document Completed")
      this.documents.splice(index,1);
    }
    else{
      NotificationComponent.displayMessage("The document was not completed (BKERR).","ERROR")
    }
  }
}



