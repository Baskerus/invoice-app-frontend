import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from 'src/app/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() openEvent = new EventEmitter();
  invoices: Invoice[];
  sidebarOpen = this.sidebarService.getSidebarState();

  constructor(
    private invoiceService: InvoiceService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    console.log('OnInit sidebar is: ', this.sidebarOpen);
  }

  emitOpenEvent(e) {
    this.openEvent.emit(e);
  }

  getEmployees() {
    this.invoiceService.getInvoices().subscribe((response: Invoice[]) => {
      this.invoices = response;
    });
  }
}
