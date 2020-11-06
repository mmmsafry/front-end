import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeTestService {

  $usersList = new BehaviorSubject<any>([]);
  users = [];

  constructor() {
  }

  setUser(user) {
    this.$usersList.next(user);
  }
}
