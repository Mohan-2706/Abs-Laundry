import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './component/login/login';
import { Header } from './component/header/header';
import { Neworder } from './component/neworder/neworder';
import { Savepannel } from './component/savepannel/savepannel';
import { Washing } from './component/washing/washing';
import { Ironing } from './component/ironing/ironing';
import { Delivery } from './component/delivery/delivery';
import { Deliveryhistory } from './component/deliveryhistory/deliveryhistory';
import { Customerhistory } from './component/customerhistory/customerhistory';
import { Settings } from './component/settings/settings';
import { Createexpence } from './component/createexpence/createexpence';
import { Bill } from './component/bill/bill';
import { Createitem } from './component/createitem/createitem';
import { Packing } from './component/packing/packing';
import { Customerrecord } from './component/customerrecord/customerrecord';
import { Deliveryrecord } from './component/deliveryrecord/deliveryrecord';
import { Admin } from './component/admin/admin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Confirmorder } from './component/confirmorder/confirmorder';
import { Layout } from './component/layout/layout';

@NgModule({
  declarations: [
    App,
    Login,
    Header,
    Neworder,
    Savepannel,
    Washing,
    Ironing,
    Delivery,
    Deliveryhistory,
    Customerhistory,
    Settings,
    Createexpence,
    Bill,
    Createitem,
    Packing,
    Customerrecord,
    Deliveryrecord,
    Admin,
    Confirmorder,
    Layout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),DatePipe
  ],
  bootstrap: [App]
})
export class AppModule { }
