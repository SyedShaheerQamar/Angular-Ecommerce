import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { RouteGuardService } from './service/route-guard.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

const routes: Routes = [
  {path:"", component: MainComponent},
  {path:"shop", component: ShopComponent},
  {path:"product/:id", component: SingleProductComponent},
  {path:"checkout", component: CheckoutComponent},
  {path:"login", component: LoginComponent},
  {path: "checkout/place-order", component: PlaceOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
