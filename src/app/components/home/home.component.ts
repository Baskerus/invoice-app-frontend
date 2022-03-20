import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Invoice } from 'src/app/interfaces/Invoice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() openEvent = new EventEmitter();
  @Output() triggerRender = new EventEmitter();
  @Input() invoices: Invoice[];



  constructor() {}

  ngOnInit(): void {}

  emitOpenEvent(e) {
    this.openEvent.emit(e);
  }

  emitTriggerRender() {
    this.triggerRender.emit();
  }
}
