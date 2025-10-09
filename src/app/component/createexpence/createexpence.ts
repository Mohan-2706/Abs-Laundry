import { Component } from '@angular/core';
import { User } from '../../service/api/user';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-createexpence',
  standalone: false,
  templateUrl: './createexpence.html',
  styleUrl: './createexpence.css'
})
export class Createexpence {

  expenceList: any[] = [];
  expence: any = { date: new Date(), items: '', amount: null,status: false };

  constructor(private callApi: User, private datepipe: DatePipe) { }

  ngOnInit() {
    this.expence.date = this.datepipe.transform(this.expence.date, 'yyyy-MM-dd');
    this.getAllExpence();
  }

  getAllExpence() {
    this.callApi.getAllExpence().subscribe((res: any) => {
      this.expenceList = res?.data;
    })
  }

  createExpence() {
    this.expence.amount = Number(this.expence.amount);
    if (this.expence.items != '' && this.expence.amount > 0) {
      let value = confirm("Are you want to add this in expence").valueOf();
      if (!value) return;
      this.expence.status = true;
      this.callApi.createExpence(this.expence).subscribe((res: any) => {
        if (res?.status) {
          this.expenceList.unshift({ createdAt: new Date(), items: this.expence.items, amount: this.expence.amount });
          this.callApi.showSuccess(res?.message);
          this.expence.items = '',
            this.expence.amount = null
        } else {
          this.callApi.showError(res?.message);
        }
        this.expence.status = false;
      })
    } else {
      this.callApi.showInfo("Enter the valid data");
    }
  }

}
