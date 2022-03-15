import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './service/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  invoices;
  sidebarOpen: boolean;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoices = this.invoiceService.getInvoicesArray();
  }

  showSidebar(option: boolean) {
    option ? (this.sidebarOpen = true) : (this.sidebarOpen = false);
  }
}
