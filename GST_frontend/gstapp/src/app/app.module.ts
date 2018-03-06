import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OrderListModule} from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderListModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
