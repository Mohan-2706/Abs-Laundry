import { Component } from '@angular/core';
import { User } from '../../service/api/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-neworder',
  standalone: false,
  templateUrl: './neworder.html',
  styleUrl: './neworder.css'
})
export class Neworder {

  query: any = { type: 'create' };
  items: any[] = [];
  itemData: any = {type: 'add'};
  orderFrom: FormGroup;
  allOrders: any[] = [];
  btnStatus: boolean = false;
  overAllTotal: any = 0;

  constructor(private callApi: User, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private datePipe: DatePipe) {
    this.orderFrom = this.fb.group({
      type: [null, Validators.required],
      user_name: [null, Validators.required],
      kuri: [null, Validators.required],
      phone_no: [null, Validators.required],
      address: [null, Validators.required],
      orders: []
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe((res: any) => {
      if (res?.bill_no||res?.kuri) {
        this.query = res;
        this.getOrderData(this.query.bill_no, this.query.kuri)
      }
    })
    this.itemData.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.itemData.item = '';
    this.getAllItems();
  }

  getAllItems() {
    this.callApi.getAllItems().subscribe((res: any) => {
      this.items = res?.data;
    })
  }

  addEdit(data: any, type: any) {
    if (type == 'edit') {
      this.itemData = data;
    } else if (type == 'update') {
      this.allOrders.map((el:any)=>{
        if(el.item == data?.item){
          el = data;
        }
      })
    }
    else if (type == 'add') {
      this.allOrders.push(structuredClone(this.itemData))
    } else {
      this.allOrders.splice(data, 1);
    }
    this.overAllTotal = 0;
    this.itemData.type = type;
    this.allOrders.map((el: any) => this.overAllTotal += Number(el?.total));
  }

  chooseItem() {
    this.items.map((el: any) => {
      if (el.item == this.itemData.item) {
        this.itemData.quantity = this.itemData.quantity ?? 1;
        this.itemData.total = this.itemData.quantity * el.amount;
        this.itemData.amount = el.amount;
      }
    })
  }

  getOrderData(bill_no: string, kuri: string) {
    this.callApi.getOrdersWithId({ bill_no, kuri }).subscribe((res: any) => {
      this.orderFrom.patchValue({ ...res.data });
      this.allOrders = res?.data?.orders;
      this.allOrders.map((el: any) => this.overAllTotal += Number(el?.total));
    })
  }

  submitOrders() {
    if (!this.orderFrom.valid && !this.allOrders.length) return this.callApi.showInfo("Enter valid data to place orders");
    let message = this.query.type == 'create' ? "Are you want to create this order" : this.query.type == 'update' ? "Are you want to update this order" : "Are you want to create new order for exist user";
    let value = confirm(message).valueOf()
    if (!value) return;
    this.btnStatus = true;
    this.orderFrom.patchValue({ type: this.query.type, orders: this.allOrders });
    let payload = {
      ...this.orderFrom.value,
    }
    this.callApi.createAndUpdatOrders(payload).subscribe((res: any) => {
      if (res?.status) {
        this.callApi.showSuccess(res?.message);
        this.itemData = {};
        this.orderFrom.reset();
        this.router.navigateByUrl("/savepannel")
      } else {
        this.callApi.showError(res?.message);
      }
      this.btnStatus = false;
    })

  }

}
