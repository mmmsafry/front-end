import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PracticeTestApiService} from './practice-test-api.service';
import {ANIMATION_TYPES, INg2LoadingSpinnerConfig} from 'ng2-loading-spinner';
import {PracticeTestService} from './practice-test.service';

@Component({
  selector: 'app-practical-test',
  templateUrl: './practical-test.component.html',
  styleUrls: ['./practical-test.component.css']
})
export class PracticalTestComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  response = false;
  loader = false;
  formValid = false;
  users = [];

  loadingConfig: INg2LoadingSpinnerConfig = {
    animationType: ANIMATION_TYPES.dualCircle,
    spinnerPosition: 'center',
    spinnerSize: 'md',
    spinnerFontSize: '1rem'
  };


  constructor(private api: PracticeTestApiService,
              private practiceTestService: PracticeTestService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      fullName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      createdDate: new FormControl('', Validators.required),
    });

    this.practiceTestService.$usersList.subscribe(resp => {
      if (resp.username) {
        this.users.push(resp);
      }
      console.log(resp);
      console.log(this.users);
    });
  }


  onFocus() {
    const username = this.form.controls.username.value;
    this.api.getUsername(username).subscribe(resp => {
      this.response = true;
      if (!resp.status) {
        this.formValid = true;
        this.errorMessage = 'username is available';
      } else {
        this.formValid = false;
        this.errorMessage = 'Username exists!';
      }
      console.log(this.errorMessage);
    });

  }

  submitForm() {
    this.loader = true;
    const payload = this.form.value;
    this.api.submitForm(payload).subscribe(reps => {
      this.loader = false;
      this.formValid = false;
      this.form.reset();
    }, error => {
      this.loader = false;
      console.log(error);
    });
  }

}
