import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { _BACKEND_HOST, _STOPS } from '../services/constants';
import { CdkDragDrop,moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common'
import { DataGetter } from '../services/data-getter';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent {
  l_document:any;
  l_path:any;
  user:any;
  dataGetter:DataGetter=new DataGetter();
  errors:any={
    'Title':'',
    'Descripton':'',
    'Path':'',
    'Image':'',
    'Comments':''};
  isDragging = false;
  stops:any=[];
  constructor(private dialogRef: MatDialogRef<EditDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.l_document=data.Document; this.user=data.User;this.l_path=this.l_document.Path;
      console.log("document = ",this.l_document)
      console.log("path = ",this.l_path)
      
  }

  async ngOnInit(){
    let l_stops = await this.dataGetter.postData(_BACKEND_HOST+"getOffices",{'User':localStorage.getItem('UserDetails')});
    for(let i=0;i<l_stops.length;i++){
      this.stops.push(l_stops[i]['OfficeName'])
    }
    console.log(this.stops)
  }

  async l_done(comments:any){
    
    let sendDoc = this.l_document
    sendDoc.Path = this.l_path
    sendDoc.Comments=comments
    const response = await this.dataGetter.postData(_BACKEND_HOST+"editDocumentByUser",sendDoc);
    console.log(response)
    this.dialogRef.close();
  }


  l_addToPath(val:any){
    if(val.length==0)return;
    this.l_path.push(val);
  }

  l_removeFromPath(index:any){
    this.l_path.splice(index,1);
  }

  l_drop(event: any) {
    moveItemInArray(this.l_path, event.previousIndex, event.currentIndex);
    this.isDragging = false;
  }

  l_addStop(i:any){
    this.l_path.push(this.stops[i]);
  }
}
