import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { InvoiceService } from 'src/app/services/invoice.service';
import { DialogComponent } from '../dialog/dialog.component';

import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DATE_FORMATS_OUT } from 'src/app/formats/date-formats';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS_OUT }],
})
export class InvoiceComponent implements OnInit {
  @Output() triggerRender = new EventEmitter();
  @Input() invoice: any;
  date: string;
  panelOpen: boolean = false;
  isDirty: boolean = false;
  displayDate: string;

  constructor(
    private invoiceService: InvoiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.displayDate = this.invoice.dueDate.split('-').reverse().join('-');
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

  handleStatusButton() {
    this.invoice.isPaid = !this.invoice.isPaid;
    this.isDirty = true;
  }

  handlePicker(pickerDate) {
    this.invoice.dueDate = pickerDate.replace(/\//g, '-');
    this.displayDate = this.invoice.dueDate.split('-').reverse().join('-');
    this.isDirty = true;
  }

  openDialog(drawer) {
    let dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.handleDelete();
        drawer.close();
      }
      return;
    });
  }

  handleDelete() {
    this.invoiceService.deleteInvoice(this.invoice.id).subscribe(() => {
      // Timeout lets the contracting animation finish
      setTimeout(() => {
        this.triggerRender.emit();
      }, 400);
    });
  }

  handleEdit() {
    this.isDirty = true;
  }

  floatTotal(total) {
    return parseFloat(total).toFixed(2);
  }
}
