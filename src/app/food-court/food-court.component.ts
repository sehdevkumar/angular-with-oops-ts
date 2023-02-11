import { FoodServiceService } from './../services/food-service.service'
import { NonvegFoodComponent } from './../nonveg-food/nonveg-food.component'
import { VegFoodComponent } from './../veg-food/veg-food.component'
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'

@Component({
  selector: 'app-food-court',
  templateUrl: './food-court.component.html',
  styleUrls: ['./food-court.component.scss'],
})
export class FoodCourtComponent implements OnInit {
  @Input() userInfo: string

  constructor(private fs: FoodServiceService) {}

  ngOnInit(): void {
    this.initSubscription()
  }

  initSubscription() {
    this.fs.onUserInfo.subscribe((user) => {
      this.onVegUserDetails(user)
    })
  }

  onVegUserDetails(user: string) {
    const vegFoodComponent = new VegFoodComponent().initUser(user)
    vegFoodComponent.paymentSuccess()
    vegFoodComponent.paymentFailed('network error')
    vegFoodComponent.paymentPending('food being prepared')
    console.log(vegFoodComponent.menu)
  }
}
