import { Component, Input, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/service/invoice.service';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  @Input() invoice: any;
  date: string;
  panelOpen: boolean = false;
  isExpanded: boolean;

  constructor(
    private sidebarService: SidebarService,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    this.date = new Date(this.invoice.due * 1000).toLocaleString('en-GB', {
      dateStyle: 'short',
    });
  }

  handleDelete() {
    this.invoiceService.deleteInvoice(this.invoice.id);
  }
}
