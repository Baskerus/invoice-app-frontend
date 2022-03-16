import {
  Component,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
  Input,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Invoice } from 'src/app/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddInvoiceComponent implements OnInit {
  // Declares emission event
  @Output() closeEvent = new EventEmitter();
  @Output() triggerRenderEvent = new EventEmitter();

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {}

  // Sends a wave later felt by the parent component
  emitCloseEvent(e) {
    this.closeEvent.emit(e);
  }
  emitTriggerRenderEvent() {
    this.triggerRenderEvent.emit();
  }

  // Handles calling for POST -- and does some data conversions because I'm lazy
  onAddInvoice(addForm: NgForm) {
    let invoiceToAdd = addForm.value;

    // Converts date from picker to epoch
    invoiceToAdd.due = parseInt(
      (invoiceToAdd.due / 1000).toLocaleString().replace(/,/g, '')
    );

    // Prevents unchecked checkbox from sending Null
    !invoiceToAdd.paid ? (invoiceToAdd.paid = false) : '';

    // Sends the invoice (in the form of form.value (JSON object)) as addInvoice parameter
    this.invoiceService
      .addInvoice(invoiceToAdd)
      .subscribe((response: Invoice) => {
        this.invoiceService.getInvoices();
        console.log('ADDED: ', response);
        // Triggers render after everything is done
        this.emitTriggerRenderEvent();
      });
  }
}
