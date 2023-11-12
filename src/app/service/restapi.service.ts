import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  GetProduct() {
    return this.http.get("http://localhost:3000/product");
  }

  GetSingleProduct(id:any) {
    return this.http.get("http://localhost:3000/product/"+id);
  }

  SaveProductTocarT(data:any){
    return this.http.post("http://localhost:3000/cart", data)
  }

  GetProductFromCart(){
    return this.http.get("http://localhost:3000/cart");
  }

  RemoveProductFromCart(id:any){
    return this.http.delete("http://localhost:3000/cart/"+id);
  }

  GetSingleProductFromCart(id:any) {
    return this.http.get("http://localhost:3000/cart/"+id);
  }

  UpdateCartProducts(data:any, id:any){
    return this.http.put("http://localhost:3000/cart/"+id, data);
  }

  CheckLogin(){
    return this.http.get("http://localhost:3000/login")
  }

  SetLogin(id:any){
    localStorage.setItem("User_Login_Id", id);
  }

  GetLogin(){
    return localStorage.getItem("User_Login_Id");
  }
}
