import { Component } from '@angular/core';
import { User } from '../../service/api/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill',
  standalone: false,
  templateUrl: './bill.html',
  styleUrl: './bill.css'
})
export class Bill {

  orders: any;

  constructor(private callApi: User, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((res: any) => {
      this.getOrders(Number(res?.bill_no));
    })
  }

  getOrders(bill_no: any) {
    this.callApi.getOrdersList({ type: 'save', bill_no }).subscribe((res: any) => {
      this.orders = res?.data[0];
    })
  }

  printElementById(elementId: string): void {
    const element = document.getElementById(elementId);

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
  }


}
