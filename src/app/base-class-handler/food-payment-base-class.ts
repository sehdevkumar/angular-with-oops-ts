import { FoodBaseClass, MenuItem } from './food-base-class'

export abstract class PaymentBaseClass extends FoodBaseClass {
  abstract initUser(name: string): void
  abstract order(orderList: Array<MenuItem>): void
  abstract paymentPending(status?: string): void
  abstract paymentSuccess(): void
  abstract paymentFailed(message: string): void

  constructor() {
    super()
  }
}
