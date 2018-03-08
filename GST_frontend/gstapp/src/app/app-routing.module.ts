import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductentryComponent} from './productentry/productentry.component';
import {BillingComponent} from './billing/billing.component';

const routes: Routes = [

  {
    path: '',
    component:ProductentryComponent
  },

  {
    path: 'billing',
    component:BillingComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
