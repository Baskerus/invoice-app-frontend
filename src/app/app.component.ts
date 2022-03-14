import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Invoice } from './Invoice';
import { InvoiceService } from './service/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  invoices: Invoice[];
  sidebarOpen: boolean;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  // Functions

  showSidebar(option: boolean) {
    option ? (this.sidebarOpen = true) : (this.sidebarOpen = false);
  }

  getEmployees() {
    this.invoiceService.getInvoices().subscribe(
      (response: Invoice[]) => {
        this.invoices = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
