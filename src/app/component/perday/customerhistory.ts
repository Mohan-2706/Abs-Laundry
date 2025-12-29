import { Component } from '@angular/core';
import { User } from '../../service/api/user';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-customerhistory',
  standalone: false,
  templateUrl: './customerhistory.html',
  styleUrl: './customerhistory.css'
})
export class Customerhistory {

  orders: any[] = [];
  search: any = { type: 'all',catagory:null };

  constructor(private callApi: User) { }

  ngOnInit() {
    this.getSaveOrders(this.search);
  }

  getSaveOrders(data: any) {
    if(data?.catagory == 'null') data.catagory = null;
    this.callApi.getOrdersList(data).subscribe((res: any) => {
      this.search.overAllAmount = 0;
      this.orders = [];
      if (data?.catagory != null) {
        res?.data?.map((items: any) => {
          if (items?.orders[0][data?.catagory] != null) {
            this.orders.push(items)
            this.search.overAllAmount += items?.overAllTotal
          }
        })
      } else {
        this.orders = res?.data;
        res?.data?.map((item: any) => {
          this.search.overAllAmount += item?.overAllTotal
        })
      }
    })
  }

  printElementById(elementId: string): void {
    const element: any = document.getElementById(elementId);
    if (element) {
      element.classList.remove("d-none");
      // This allows the natural display (like 'block') to return
    }
    if (!element) {
      console.error('Element not found:', elementId);
      return;
    }

    const printWindow = window.open('', '_blank', 'width=800,height=600');

    // Copy all <link rel="stylesheet"> and <style> tags
    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
      .map(style => style.outerHTML)
      .join('\n');

    printWindow!.document.write(`
      <html>
        <head>
          <title>Print</title>
          ${styles}
        </head>
        <body onload="window.print(); window.close();">
          ${element.outerHTML}
        </body>
      </html>
    `);

    printWindow!.document.close();
    element.classList.add("d-none");
  }
}
