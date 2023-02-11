export interface FoodBaseInterface {
  menu?: Array<MenuItem>
  orderSelected: Array<MenuItem>
  userName: string
}

export interface MenuItem {
  itemName: string
  price: number
}

export abstract class FoodBaseClass implements FoodBaseInterface {
  abstract menu?: Array<MenuItem>
  abstract orderSelected: Array<MenuItem>
  abstract userName: string

  constructor() {
    this.addMenuItems()
  }

  addMenuItems() {
    this.menu = [
      { itemName: 'Pizza', price: 500 },
      { itemName: 'Burger', price: 600 },
      { itemName: 'Chicken Curry', price: 1000 },
    ]
  }
}
