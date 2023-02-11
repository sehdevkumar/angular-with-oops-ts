import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  onUserInfo: Subject<string> = new Subject()

  constructor() {}
}
