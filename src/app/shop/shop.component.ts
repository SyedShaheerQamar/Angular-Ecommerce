import { Component } from '@angular/core';
import { RestapiService } from '../service/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  constructor(private service:RestapiService, private route: Router) { }

  ngOnInit() {
    this.ShopProducs();
  }

  data : any;
  id = "";

  ShopProducs(){
    this.service.GetProduct().subscribe((response) => {
      this.data = response;   
    });
  }

  ProductPage(id:any){
    this.id = id;
    this.route.navigate(["product", this.id])
    
  }

}
