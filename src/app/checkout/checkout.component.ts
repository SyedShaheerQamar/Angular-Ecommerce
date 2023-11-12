import { Component } from '@angular/core';
import { RestapiService } from '../service/restapi.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  arr: any;
  total = 0;
  myForm!: FormGroup;
  check !: boolean;
  count = 0;


  constructor(private Service: RestapiService, private fb: FormBuilder, private route:Router) { }

  ngOnInit(){
    this.myForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      house: ['', Validators.required],
      town: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(5)]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
    });
    this.GetAllProductsFromCart();
  }

  GetAllProductsFromCart(){
    this.Service.GetProductFromCart().subscribe((response) => {
      // debugger
      this.arr = response;
      
      for(var i=0; i<this.arr.length; i++){
        this.total += this.arr[i].price * this.arr[i].quantity; 
      }
      
    })
  }

  onSubmit(form: FormGroup){
    if(!form.valid){
      alert("Please insert complete information");
      this.check = !form.valid;
    }
    else{
      let id = sessionStorage.getItem('authenticateUser');
      
      if(id == null){
        alert("Login first to place order");
        this.route.navigate(["login"]);
      }
      else{
        this.route.navigate(['checkout/place-order']);
      }
      
    }
  }

  GetCouponCode(){
    let code = prompt("Enter Coupon Code");

    if(this.count == 0){
      if(code == "OFF10"){
        this.count += 1;
        alert("10 Percent Discount Added!")
        let disc = (this.total * 10)/100;
        this.total = this.total - disc;
      }
      else{
        alert("Invalid Coupon Code")
      }
    }
    else{
      alert("Coupon has already been used!")
    }
  }
}
