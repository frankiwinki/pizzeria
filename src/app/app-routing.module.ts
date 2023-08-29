import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { OrderPizzaComponent } from "./order-pizza/order-pizza.component";
import { BuildUrPizzaComponent } from "./build-ur-pizza/build-ur-pizza.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "orderPizza", component: OrderPizzaComponent },
  { path: "buildPizza", component: BuildUrPizzaComponent },
  { path: "shoppingcart", component: ShoppingCartComponent },
  { path: "**", component: HomeComponent },
  { path: "", redirectTo: "HomeComponent", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  OrderPizzaComponent,
  BuildUrPizzaComponent,
  ShoppingCartComponent
];
