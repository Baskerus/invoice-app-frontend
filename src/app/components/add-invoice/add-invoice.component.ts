import {
  Component,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddInvoiceComponent implements OnInit {
  @Output() openEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitEvent(e) {
    this.openEvent.emit(e);
  }
}
