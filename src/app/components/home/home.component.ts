import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Invoice } from 'src/app/interfaces/Invoice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() triggerRender = new EventEmitter();
  @Input() invoices: Invoice[];
  @Input() sidebar;

  constructor() {}

  ngOnInit(): void {}

  numberOfInvoices() {
    if (this.invoices.length === 1) {
      return 'There is only one invoice';
    } else if (this.invoices.length === 0) {
      return 'No invoices to display';
    }
    return `There are ${this.invoices.length} invoices.`
  }

  emitTriggerRender() {
    this.triggerRender.emit();
  }
}
