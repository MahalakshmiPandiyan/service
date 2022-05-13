import { Component } from '@angular/core';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'service';
  users:any;
 
  constructor(private userData:UserService)
  {
    console.warn(userData.users)
    this.users=userData.users();
  }


}
