import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { NewDispatchComponent } from './new-dispatch/new-dispatch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotificationComponent } from './notification/notification.component';
import { DispatchedDocumentsComponent } from './dispatched-documents/dispatched-documents.component';
import { IncomingDocumentsComponent } from './incoming-documents/incoming-documents.component';
import { RecievedDocumentsComponent } from './recieved-documents/recieved-documents.component';
import { CompletedDocumentsComponent } from './completed-documents/completed-documents.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { SearchDocumentComponent } from './search-document/search-document.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    NewDispatchComponent,
    SignInComponent,
    MainComponentComponent,
    MyProfileComponent,
    NotificationComponent,
    DispatchedDocumentsComponent,
    IncomingDocumentsComponent,
    RecievedDocumentsComponent,
    CompletedDocumentsComponent,
    EditDocumentComponent,
    SearchDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
