import { Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {

  firstName = "Chris";
  lastName = "Haugen";
  userName = this.firstName + " " + this.lastName;
  bgImg = "#";
  userImg = "#";

}
