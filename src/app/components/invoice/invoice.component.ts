import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { InvoiceService } from 'src/app/service/invoice.service';
import { DialogComponent } from '../dialog/dialog.component';

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
  isDirty: boolean = false;
  dateChanged: boolean = false;
  displayDate: string;

  constructor(
    private invoiceService: InvoiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.displayDate = (this.invoice.due_date.split('-').reverse().join('-'));
    this.invoice = this.invoice;
  }

  handleDelete() {
    this.invoiceService.deleteInvoice(this.invoice.id).subscribe(() => {
      // Timeout lets the contracting animation finish
      setTimeout(() => {
        this.triggerRender.emit();
      }, 400);
    });
  }

  openDialog(drawer) {
    let dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.handleDelete();
        drawer.close();
      } else {
        return;
      }
    });
  }

  handleSyncButton(drawer) {
    this.isDirty = false;
    this.invoiceService.updateInvoice(this.invoice).subscribe(() => {
      drawer.close();
      setTimeout(() => {
        this.triggerRender.emit();
      }, 400);
    });
  }

  changeDate(pickerDate) {
    this.dateChanged = false;

    // Date conversion
    this.invoice.due_date = pickerDate.split('/').reverse();
    var tmp = this.invoice.due_date[2];
    this.invoice.due_date[2] = this.invoice.due_date[1];
    this.invoice.due_date[1] = tmp;
    this.invoice.due_date = this.invoice.due_date.join('-');

    this.displayDate = (this.invoice.due_date.split('-').reverse().join('-'));
    this.isDirty = true;
  }

  handleStatusButton(e) {
    this.invoice.isPaid = !this.invoice.isPaid;
    this.isDirty = true;
  }

  handleEdit() {
    this.isDirty = true;
  }

  floatTotal(total) {
    return parseFloat(total).toFixed(2);
  }
}
