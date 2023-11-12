import { Component } from '@angular/core';
import { RestapiService } from '../service/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {

  date = new Date();
  total = 0;
  arr:any = [];

  constructor(private pService: RestapiService, private route: Router) { }

  ngOnInit(){
    this.GetTotal();
    this.GetAllProducts();
  }

  GetTotal(){
    this.pService.GetProductFromCart().subscribe((response) => {
      let arr:any = [];
      arr = response;

      for(var i=0; i<arr.length; i++){
        this.total += arr[i].price * arr[i].quantity;
      }
    })
  }

  GetAllProducts(){
    this.pService.GetProductFromCart().subscribe((response) => {
      this.arr = response;
    })
  }

  ShowProduct(id:any){
    console.log(id);
    this.route.navigate(["product", id])
  }

}
