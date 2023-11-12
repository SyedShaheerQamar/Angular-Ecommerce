import { Component } from '@angular/core';
import { MessageServiceService } from '../service/message-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  title = "";

  constructor(private msgService: MessageServiceService) { }

  checkThis(){
    this.msgService.changeMessage(this.title);
  }

  
}
