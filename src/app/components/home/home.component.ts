import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  invoices: Invoice[];

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.getEmployees();
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
