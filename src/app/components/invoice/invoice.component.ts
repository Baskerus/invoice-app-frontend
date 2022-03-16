import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
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
  isExpanded: boolean;

  constructor(
    private invoiceService: InvoiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.date = new Date(this.invoice.due * 1000).toLocaleString('en-GB', {
      dateStyle: 'short',
    });
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
}
