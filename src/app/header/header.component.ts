import { Component } from '@angular/core';
import { RestapiService } from '../service/restapi.service';
import { HardcodeauthenticationService } from '../service/hardcodeauthentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  validLogin: boolean = false;

  constructor(public Authentication: HardcodeauthenticationService) { }

  ngOnInit(){
    this.validLogin = this.Authentication.IsUserLoggedIn();
  }

  // CheckLogin(){
  //   // debugger
  //   let user = sessionStorage.getItem('authenticateUser');
  //   if(user != null){
  //     this.validLogin = false;
  //   }else{
  //     this.validLogin = true;
  //   }
  // }

  LogoutUser(){
    debugger
    sessionStorage.clear();
  }

}
