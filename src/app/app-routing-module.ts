import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './component/login/login';
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
import { tokenGuard, tokenLessGuard } from './guard/auth-guard';
import { Confirmorder } from './component/confirmorder/confirmorder';
import { Layout } from './component/layout/layout';

const routes: Routes = [
  { path: '', component: Login, canActivate: [tokenLessGuard] },

  {
    path: '', component: Layout, children: [
      { path: 'neworder', component: Neworder, canActivate: [tokenGuard] },
      { path: 'savepannel', component: Savepannel, canActivate: [tokenGuard] },
      { path: 'washing', component: Washing, canActivate: [tokenGuard] },
      { path: 'ironing', component: Ironing, canActivate: [tokenGuard] },
      { path: 'delivery', component: Delivery, canActivate: [tokenGuard] },
      { path: 'deliveryhistory', component: Deliveryhistory, canActivate: [tokenGuard] },
      { path: 'customerhistory', component: Customerhistory, canActivate: [tokenGuard] },
      { path: 'home', component: Settings, canActivate: [tokenGuard] },
      { path: 'createexpence', component: Createexpence, canActivate: [tokenGuard] },
      { path: 'bill', component: Bill, canActivate: [tokenGuard] },
      { path: 'createitem', component: Createitem, canActivate: [tokenGuard] },
      { path: 'packing', component: Packing, canActivate: [tokenGuard] },
      { path: 'customerrecord', component: Customerrecord, canActivate: [tokenGuard] },
      { path: 'deliveryrecord', component: Deliveryrecord, canActivate: [tokenGuard] },
      { path: 'admin', component: Admin, canActivate: [tokenGuard] },
      { path: 'confirmorderlist', component: Confirmorder, canActivate: [tokenGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
