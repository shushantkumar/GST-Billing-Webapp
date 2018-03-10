import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http'; 
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
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {ProductentryService} from './productentry/productentry.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    ProductentryComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    TableModule,
    DataViewModule,
    DropdownModule,
    DialogModule,
    PanelModule,
    HttpModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [
    ProductentryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
