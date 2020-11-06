import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PracticalTestComponent} from './module/practical-test/practical-test.component';

const routes: Routes = [
  {
    path: 'e-future',
    data: {
      title: 'e-future Title'
    },
    component: PracticalTestComponent
  },
  {
    path: '**',
    redirectTo: '/e-future'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
