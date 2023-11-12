import { Component } from '@angular/core';
import { RestapiService } from '../service/restapi.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = "";
  password = "";
  check!:boolean;

  constructor(private pService: RestapiService, private route:Router){ }

  LoginValidation(){
    this.pService.CheckLogin().subscribe((response) => {
      let arr:any = [];
      arr = response;

      for(var i=0; i<arr.length; i++){
        if(this.username == arr[i].email || this.username == arr[i].name){
          if(this.password == arr[i].password){
            sessionStorage.setItem('authenticateUser', arr[i].id);
            this.route.navigate([""]);
          }
          else{
            this.check = true;
          }
        }
        else{
            this.check = true;
          }
      }
      
    })
    

    
  }

}
