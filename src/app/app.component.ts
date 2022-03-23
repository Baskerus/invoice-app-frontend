import { Component, OnInit } from '@angular/core';
import { Invoice } from './interfaces/Invoice';
import { InvoiceService } from './services/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  invoices: Invoice[] = []; // Can be moved depending on which component needs invoices
  sidebarOpen: boolean;

  constructor(
    private invoiceService: InvoiceService,
  ) {}

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
    this.invoiceService.getInvoices().subscribe((response: Invoice[]) => {
      this.invoices = response;
    });
  }
}
