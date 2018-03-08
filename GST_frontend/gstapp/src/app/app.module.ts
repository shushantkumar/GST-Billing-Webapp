import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { BillingComponent } from './billing/billing.component';
import {ChartModule, CalendarModule, SharedModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/toolbar';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    ProductentryComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    SharedModule,
    CalendarModule,
    ToolbarModule,
    ButtonModule,
    ChartModule,
    CheckboxModule,
    RadioButtonModule,
    SplitButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
