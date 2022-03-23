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


  emitTriggerRender() {
    this.triggerRender.emit();
  }
}
