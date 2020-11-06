import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PracticalTestComponent} from './practical-test/practical-test.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Ng2LoadingSpinnerModule} from 'ng2-loading-spinner';


@NgModule({
  declarations: [PracticalTestComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2LoadingSpinnerModule.forRoot({})
  ]
})
export class FeatureModule {
}
