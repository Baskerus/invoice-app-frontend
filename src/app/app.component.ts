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
  invoices = [];
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
      this.invoices = response; // Populates invoices arr with response (arr)
    });
  }
}

/* response.forEach((res) => {
  // Iterates through the array and adds value to the total
  this.invoiceService.total = this.invoiceService.total + res.total;
  this.total = this.invoiceService.total;

  if (res.paid) {
    // Adds to paid total or pending total depending on the response.paid value
    this.invoiceService.paidTotal =
      this.invoiceService.paidTotal + res.total;
    this.paidTotal = this.invoiceService.paidTotal;
  } else if (!res.paid) {
    this.invoiceService.pendingTotal =
      this.invoiceService.pendingTotal + res.total;
    this.pendingTotal = this.invoiceService.pendingTotal;
  }
});
 */
