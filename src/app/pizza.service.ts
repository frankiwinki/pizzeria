import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, map, filter } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
import { Pizzas } from "./pizzas";
import { Toppings } from "./toppings";
import { OrderTopping, OrderPizza } from "./orders";

@Injectable({
  providedIn: "root"
})
export class PizzaService {
  // _api_url = "../assets/pizzeria.json";
  _api_host_url = "http://localhost:3000/";

  /* Behaviour Subject to hold Pizza and Topping orders live throughout the website */
  toppingOrders = new BehaviorSubject<OrderTopping[]>([]);
  pizzaOrders = new BehaviorSubject<OrderPizza[]>([]);

  constructor(private http: HttpClient) {}

  getPizzasList(): Observable<Pizzas[]> {
    /* http to return from local JSON File */
    //   return this.http
    //     .get<Pizzas[]>(this._api_url)
    //     .pipe(map( data => data['pizzas'] ));

    /* http to return response from a backend server */
    return this.http
      .get<Pizzas[]>(this._api_host_url + "pizzas")
      .pipe(/*tap(data => console.log("host" + JSON.stringify(data)))*/);
  }

  getToppingsList(): Observable<Toppings[]> {
    return this.http
      .get<Toppings[]>(this._api_host_url + "toppingssGradients")
      .pipe(tap(/*data => console.log(data)*/));
  }

  /* update pizza and topping orders from component using next() method */
  updateToppingOrders(toppingOrders: OrderTopping[]) {
    this.toppingOrders.next(toppingOrders);
  }

  updatePizzaOrders(pizzaOrders: OrderPizza[]) {
    this.pizzaOrders.next(pizzaOrders);
  }
}
