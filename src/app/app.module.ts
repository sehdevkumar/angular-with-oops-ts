import { FoodServiceService } from './services/food-service.service'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FoodCourtComponent } from './food-court/food-court.component'
import { VegFoodComponent } from './veg-food/veg-food.component'
import { NonvegFoodComponent } from './nonveg-food/nonveg-food.component'

@NgModule({
  declarations: [
    AppComponent,
    FoodCourtComponent,
    VegFoodComponent,
    NonvegFoodComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [FoodServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
