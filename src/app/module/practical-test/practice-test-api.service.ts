import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {PracticeTestService} from './practice-test.service';

@Injectable({
  providedIn: 'root'
})
export class PracticeTestApiService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient,
              private practiceTestService: PracticeTestService) {
  }

  getUsername(username) {
    return this.http.get<{ 'status': boolean }>(`${this.baseUrl}/get-username?username=${username}`);
  }

  submitForm(payload) {
    return this.http.post(`${this.baseUrl}/submit-form`, payload).pipe(tap(resp => {
      this.practiceTestService.setUser(resp);
    }));
  }
}
