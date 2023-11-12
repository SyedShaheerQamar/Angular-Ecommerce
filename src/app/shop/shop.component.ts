import { Component } from '@angular/core';
import { RestapiService } from '../service/restapi.service';
import { Router } from '@angular/router';
import { MessageServiceService } from '../service/message-service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  data : any;
  id = "";
  title = "";

  constructor(private service:RestapiService, private route: Router, private msgService: MessageServiceService) { }

  ngOnInit() {
    this.msgService.message$.subscribe(data => {
      this.title = data;
      this.ShopProducs();
    })
    // this.ShopProducs();
  }

  

  ShopProducs(){
    this.service.GetProduct(this.title).subscribe((response) => {
      this.data = response;   
    });
  }

  ProductPage(id:any){
    this.id = id;
    this.route.navigate(["product", this.id])
    
  }

}
