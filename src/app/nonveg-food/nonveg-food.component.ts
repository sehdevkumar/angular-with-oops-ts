import { Component, OnInit } from '@angular/core'
import { MenuItem } from '../base-class-handler/food-base-class'
import { PaymentBaseClass } from '../base-class-handler/food-payment-base-class'

@Component({
  selector: 'app-nonveg-food',
  templateUrl: './nonveg-food.component.html',
  styleUrls: ['./nonveg-food.component.scss'],
})
export class NonvegFoodComponent extends PaymentBaseClass implements OnInit {
  constructor() {
    super()
  }
  menu?: MenuItem[]

  orderSelected: Array<MenuItem> = []
  userName: string

  initUser(userInfo: string) {
    this.userName = userInfo

    return this
  }

  paymentPending(status: string): void {
    console.log(
      `Payment for user ${this.userName} is pending , ordered items...`,
    )
  }
  paymentSuccess(): void {
    console.log(`Payment is successfully Completed for ${this.userName}`)
  }
  paymentFailed(reason: string): void {
    console.log(`Payment is failed  for ${this.userName} due to ${reason}`)
  }

  order(orderList: Array<MenuItem>) {
    this.orderSelected = orderList
  }

  ngOnInit(): void {}
}
