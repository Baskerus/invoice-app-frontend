import {
  Component,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
  Input,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { InvoiceService } from 'src/app/services/invoice.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DATE_FORMATS_FORM } from 'src/app/formats/date-formats';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS_FORM }],
  encapsulation: ViewEncapsulation.None,
})
export class AddInvoiceComponent implements OnInit {
  @Output() triggerRenderEvent = new EventEmitter();
  @Input() sidebar;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {}

  emitTriggerRenderEvent() {
    this.triggerRenderEvent.emit();
  }

  onAddInvoice(addForm: NgForm) {
    let invoiceToAdd = addForm.value;

    // Prevents unchecked checkbox from sending null
    !invoiceToAdd.isPaid ? (invoiceToAdd.isPaid = false) : '';

    // Sends the invoice
    this.invoiceService.addInvoice(invoiceToAdd).subscribe(() => {
      this.invoiceService.getInvoices();
      // Triggers render after adding
      this.emitTriggerRenderEvent();
    });
  }
}
