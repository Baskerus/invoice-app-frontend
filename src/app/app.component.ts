import { Component, OnInit } from '@angular/core';
import { Invoice } from './interfaces/Invoice';
import { InvoiceService } from './service/invoice.service';
import { SidebarService } from './service/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Could be moved elsewhere depending on which compoen needs invoices;
  invoices: Invoice[] = [];
  sidebarOpen: boolean;

  constructor(
    private invoiceService: InvoiceService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.getInvoices();
  }

  showSidebar(option: boolean) {
    this.sidebarService.sidebarOpen = option;
    this.sidebarOpen = this.sidebarService.sidebarOpen;
  }

  getInvoices() {
    this.invoiceService.getInvoices().subscribe((response: Invoice[]) => {
      this.invoices = response;
    });
  }
}
