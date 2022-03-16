import { Component, OnInit } from '@angular/core';
import { Invoice } from './Invoice';
import { InvoiceService } from './service/invoice.service';
import { SidebarService } from './service/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  invoices: Invoice[] = [];
  sidebarOpen: boolean;
  total = this.invoiceService.total;

  constructor(
    private invoiceService: InvoiceService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.getInvoices();
    this.invoiceService.total = 0;
  }

  showSidebar(option: boolean) {
    this.sidebarService.sidebarOpen = option;
    this.sidebarOpen = this.sidebarService.sidebarOpen;
  }

  getInvoices() {
    this.invoiceService.getInvoices().subscribe((response: Invoice[]) => {
      this.invoices = response; // Populates invoices arr with response (arr)
      this.invoiceService.total = 0; // Resets total before calculation
      response.forEach((res) => {
        // Iterates through the array and adds value to the total
        this.invoiceService.total = this.invoiceService.total + res.total;
        this.total = this.invoiceService.total;
      });
    });
  }
}
