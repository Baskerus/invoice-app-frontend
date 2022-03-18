import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Invoice } from 'src/app/interfaces/Invoice';
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
  hasUnsavedChanges: boolean = false;
  invoiceToUpdate: Invoice;
  dateChanged: boolean = false;

  constructor(
    private invoiceService: InvoiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.date = new Date(this.invoice.due * 1000).toLocaleString('en-GB', {
      dateStyle: 'short',
    });
    this.invoiceToUpdate = this.invoice;
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
    this.hasUnsavedChanges = false;
    this.invoiceService.updateInvoice(this.invoiceToUpdate).subscribe(() => {
      drawer.close();
      setTimeout(() => {
        this.triggerRender.emit();
      }, 400);
    });
  }

  setInvoiceToUpdate(property, value) {
    switch (property) {
      case 'name':
        this.invoiceToUpdate.name = value;
    }
  }

  changeDate(value) {
    this.dateChanged = false;
    let dateEpoch = Date.parse(value);
    let newDate = new Date(dateEpoch).toLocaleString('en-GB', {
      dateStyle: 'short',
    });
    this.date = newDate;
    this.invoiceToUpdate.due = dateEpoch / 1000;
    this.hasUnsavedChanges = true;
  }

  handleStatusButton(e) {
    this.invoiceToUpdate.paid = !this.invoiceToUpdate.paid;
    this.hasUnsavedChanges = true;
  }

  handleInput(target) {
    switch (target.id) {
      case 'name':
        this.invoiceToUpdate.name = target.value;
        break;
      case 'address':
        this.invoiceToUpdate.address = target.value;
        break;
      case 'city':
        this.invoiceToUpdate.city = target.value;
        break;
      case 'code':
        this.invoiceToUpdate.code = target.value;
        break;
      case 'country':
        this.invoiceToUpdate.country = target.value;
        break;
      case 'description':
        this.invoiceToUpdate.description = target.value;
        break;
      case 'email':
        this.invoiceToUpdate.email = target.value;
        break;
      case 'total':
        this.invoiceToUpdate.total = target.value;
        break;
    }

    this.hasUnsavedChanges = true;
  }
}
