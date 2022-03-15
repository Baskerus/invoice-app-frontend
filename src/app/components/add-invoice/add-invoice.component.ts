import {
  Component,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
  Input,
} from '@angular/core';


@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddInvoiceComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
   
  }

  emitCloseEvent(e) {
    this.closeEvent.emit(e);
  }

  handleSubmit() {
    console.log('Submitted form.');
  }
}
