import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { IngredientsPipe } from "./shared/pipes/ingredients.pipe";
import { ToppingsPipe } from "./shared/pipes/toppings.pipe";
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    routingComponents,
    IngredientsPipe,
    ToppingsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
