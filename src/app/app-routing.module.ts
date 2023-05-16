import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewDispatchComponent } from './new-dispatch/new-dispatch.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DispatchedDocumentsComponent } from './dispatched-documents/dispatched-documents.component';
import { IncomingDocumentsComponent } from './incoming-documents/incoming-documents.component';
import { RecievedDocumentsComponent } from './recieved-documents/recieved-documents.component';
import { CompletedDocumentsComponent } from './completed-documents/completed-documents.component';
import { SearchDocumentComponent } from './search-document/search-document.component';

const routes: Routes = [
  {path: '',component:SignInComponent},
  {path: 'main', redirectTo: 'main/home', pathMatch:'full'},
  {path: 'main/new-dispatch',component: NewDispatchComponent},
  {path: 'main/home',component: HomeComponent},
  {path: 'main/my-profile',component: MyProfileComponent},
  {path: 'main/dispatched', component:DispatchedDocumentsComponent},
  {path: 'main/incoming',component:IncomingDocumentsComponent},
  {path: 'main/recieved', component:RecievedDocumentsComponent},
  {path: 'main/completed', component:CompletedDocumentsComponent},
  {path: 'main/search', component:SearchDocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
