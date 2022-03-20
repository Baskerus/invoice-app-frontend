import {
  Component,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddInvoiceComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();
  @Output() triggerRenderEvent = new EventEmitter();

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {}

  emitCloseEvent(e) {
    this.closeEvent.emit(e);
  }
  emitTriggerRenderEvent() {
    this.triggerRenderEvent.emit();
  }

  onAddInvoice(addForm: NgForm) {
    let invoiceToAdd = addForm.value;

    // Formats date to epoch
    invoiceToAdd.due_date = parseInt(
      (invoiceToAdd.due_date / 1000).toLocaleString().replace(/,/g, '')
    );

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
