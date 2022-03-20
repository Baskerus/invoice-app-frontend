import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Invoice } from 'src/app/interfaces/Invoice';

@Component({
  selector: 'app-invoices-total',
  templateUrl: './invoices-total.component.html',
  styleUrls: ['./invoices-total.component.css'],
})
export class InvoicesTotalComponent implements OnChanges {
  @Input() invoices: Invoice[];
  paidSum: number;
  pendingSum: number;
  totalSum: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateSums();
  }

  calculateSums() {
    this.paidSum = 0;
    this.pendingSum = 0;
    this.totalSum = 0;

    this.invoices.forEach((invoice) => {
      this.totalSum = this.totalSum + invoice.total;
      if (invoice.isPaid) {
        this.paidSum = this.paidSum + invoice.total;
      } else {
        this.pendingSum = this.pendingSum + invoice.total;
      }
    });
  }
}
