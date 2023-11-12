import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private message = new BehaviorSubject("");
  message$ = this.message.asObservable();

  constructor() { }

  changeMessage(data:any){
    this.message.next(data);
  }

}
