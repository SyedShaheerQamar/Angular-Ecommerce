import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeauthenticationService {

  constructor() { }

  IsUserLoggedIn(){
    let user = sessionStorage.getItem("authenticateUser");
    return (user === null);
  }
}
