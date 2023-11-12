import { ChangeDetectionStrategy,Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RestapiService } from '../service/restapi.service';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  items: MenuItem[] | undefined;
  prodDetail:any;
  showProd:boolean = false ;
  value = 1;
  total = 0;
  cartItems = 0;

  constructor(private pSerice: RestapiService) { }

    ngOnInit() {
      this.GetTotal();
    }

    SingleProductDetail(){
      this.pSerice.GetProductFromCart().subscribe((response) => {
        // console.log(response);
        this.prodDetail = response;
        console.log(this.prodDetail);

        if(this.prodDetail.length == 0){
          alert("No items in cart.");
        }else{
          this.GetTotal();
          let cart = document.querySelector(".cart");

          cart?.classList.add("active");
          this.showProd = true;
        }        
        
      })
    }

    RemoveFromCart(id:any){
      this.pSerice.RemoveProductFromCart(id).subscribe(id);
      this.SingleProductDetail();
      let cart = document.querySelector(".cart");
      cart?.classList.remove("active");
    }


    CloseSlider(){
      let cart = document.querySelector(".cart");

      cart?.classList.remove("active");
      
    }

    CheckQuantity(id:any){      
      if(this.value <= 0){
        this.value = 1;
      }

      let pId:any = id;

      this.pSerice.GetSingleProductFromCart(id).subscribe((response) => {
        // console.log(response);
        let arr:any = []
        arr = response;

        let updateCartQuan:any = {
          title : arr.title,
          img : arr.img,
          price : arr.price,
          quantity : this.value
        }

        this.pSerice.UpdateCartProducts(updateCartQuan, pId).subscribe(updateCartQuan, pId);
        this.GetTotal();
        
      })

      // this.check.GetAllProductsFromCart();
      
      
    }

    GetTotal(){
      this.total = 0;
      this.pSerice.GetProductFromCart().subscribe((response) => {
        // console.log(response);
        let arr:any = [];
        arr = response;

        for(var i=0; i<arr.length; i++){
          this.total += arr[i].price * arr[i].quantity;
        }
        // console.log(this.total);
        
        
      })
    }

        
}
