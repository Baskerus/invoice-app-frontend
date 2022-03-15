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
  invoices;
  sidebarOpen: boolean;

  constructor(
    private invoiceService: InvoiceService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.invoices = this.invoiceService.getInvoicesArray();
  }

  showSidebar(option: boolean) {
    this.sidebarService.sidebarOpen = option;
    this.sidebarOpen = this.sidebarService.sidebarOpen;
  }
}
