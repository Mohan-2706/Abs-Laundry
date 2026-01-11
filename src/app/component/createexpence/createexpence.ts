import { Component } from '@angular/core';
import { User } from '../../service/api/user';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-createexpence',
  standalone: false,
  templateUrl: './createexpence.html',
  styleUrl: './createexpence.css'
})
export class Createexpence {
  filename: any = "Customer-history.xlsx";
  expenceList: any[] = [];
  print: boolean = false;
  expence: any = { date: new Date(), items: '', amount: null, status: false, editStatus: false };

  constructor(private callApi: User, private datepipe: DatePipe) { }

  ngOnInit() {
    this.expence.date = this.datepipe.transform(this.expence.date, 'yyyy-MM-dd');
    this.getAllExpence();
  }

  getAllExpence() {
    this.callApi.getAllExpence().subscribe((res: any) => {
      this.expenceList = res?.data?.sort((a:any,b:any)=> new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime());
    })
  }

  createExpence() {
    this.expence.amount = Number(this.expence.amount);
    if (this.expence.items != '' && this.expence.amount > 0) {
      let value = confirm(`Are you want to ${this.expence.editStatus ? "update" : "add"} this in expence`).valueOf();
      if (!value) return;
      this.expence.status = true;
      this.callApi.createExpence(this.expence).subscribe((res: any) => {
        if (res?.status) {
          this.expenceList.unshift({ createdAt: new Date(), items: this.expence.items, amount: this.expence.amount });
          this.callApi.showSuccess(res?.message);
          this.expence.items = '',
            this.expence.amount = null
          this.getAllExpence();
        } else {
          this.callApi.showError(res?.message);
        }
        this.expence.status = false;
        this.expence.editStatus = false;
      })
    } else {
      this.callApi.showInfo("Enter the valid data");
    }
  }

  editExpense(data: any) {
    this.expence = structuredClone(data);
    this.expence.date = this.datepipe.transform(data?.createdAt, 'yyyy-MM-dd');
    this.expence.editStatus = true;
  }

  cancel() {
    this.expence = {
      date: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      items: '',
      amount: null,
      status: false,
      editStatus: false
    };
  }

  export() {
    this.print = true;
    let data = document.getElementById("record");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
    XLSX.writeFile(wb, this.filename);
    this.print = false;
  }
}
