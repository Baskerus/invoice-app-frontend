import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  @Output() triggerRender = new EventEmitter();
  @Input() invoice: any;
  date: string;
  panelOpen: boolean = false;
  isExpanded: boolean;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.date = new Date(this.invoice.due * 1000).toLocaleString('en-GB', {
      dateStyle: 'short',
    });
  }

  floatTotal(total) {
    return parseFloat(total).toFixed(2);
  }

  handleDelete() {
    this.invoiceService
      .deleteInvoice(this.invoice.id)
      .subscribe((resoponse) => {
        // Timeout let's the contracting animation finish
        setTimeout(() => {
          this.triggerRender.emit();
        }, 500);
      });
  }
}
