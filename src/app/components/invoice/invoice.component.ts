import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  @Input() invoice: any;
  date;
  panelOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.date = new Date(this.invoice.due * 1000).toLocaleString('en-GB', {
      dateStyle: 'short',
    });
  }
}
