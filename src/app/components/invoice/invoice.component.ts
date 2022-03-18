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
  @Input() invoice;
  date: string;
  panelOpen: boolean = false;
  isDirty: boolean = false;
  dateChanged: boolean = false;

  constructor(
    private invoiceService: InvoiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.date = new Date(this.invoice.due * 1000).toLocaleString('en-GB', {
      dateStyle: 'short',
    });
    this.invoice = this.invoice;
  }

  handleDelete() {
    this.invoiceService.deleteInvoice(this.invoice.id).subscribe(() => {
      // Timeout let's the contracting animation finish
      setTimeout(() => {
        this.triggerRender.emit();
      }, 400);
    });
  }

  floatTotal(total) {
    return parseFloat(total).toFixed(2);
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

  handleUpdateClick(drawer) {
    console.log(this.invoice);
    this.isDirty = false;
    this.invoiceService.updateInvoice(this.invoice).subscribe(() => {
      drawer.close();
      setTimeout(() => {
        this.triggerRender.emit();
      }, 400);
    });
  }

  setinvoice(property, value) {
    switch (property) {
      case 'name':
        this.invoice.name = value;
    }
  }

  changeDate(value) {
    this.dateChanged = false;
    let dateEpoch = Date.parse(value);
    let newDate = new Date(dateEpoch).toLocaleString('en-GB', {
      dateStyle: 'short',
    });
    this.date = newDate;
    this.invoice.due = dateEpoch / 1000;
    this.isDirty = true;
  }

  handleStatusButton(e) {
    this.invoice.paid = !this.invoice.paid;
    this.isDirty = true;
  }

  handleEdit() {
    this.isDirty = true;
  }
}
