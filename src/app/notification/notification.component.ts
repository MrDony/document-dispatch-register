import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  public static message:any;
  public static title:any;
  public static displaying:any=false;
  public static async displayMessage(message:any, title:any){
    NotificationComponent.displaying=true;
    NotificationComponent.message=message;
    NotificationComponent.title=title;
    await NotificationComponent.sleep(3000);
    NotificationComponent.displaying=false;
  }

  public static async sleep(ms: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, ms));
  }

  close(){
    NotificationComponent.displaying=false;
  }

  getDisplaying(){
    return NotificationComponent.displaying;
  }
  getTitle(){
    return NotificationComponent.title;
  }
  getMessage(){
    return NotificationComponent.message;
  }
}
