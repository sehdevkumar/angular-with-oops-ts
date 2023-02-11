import { FoodServiceService } from './services/food-service.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private fs: FoodServiceService) {}

  onClicked() {
    this.fs.onUserInfo.next('Hello')
  }
}
