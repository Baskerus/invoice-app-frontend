import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Invoice } from 'src/app/interfaces/Invoice';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() openEvent = new EventEmitter();
  @Output() triggerRender = new EventEmitter();
  @Input() invoices: Invoice[];
  @Input() total;
  @Input() paidTotal;
  @Input() pendingTotal;

  sidebarOpen = this.sidebarService.getSidebarState();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {}

  emitOpenEvent(e) {
    this.openEvent.emit(e);
  }

  emitTriggerRender() {
    this.triggerRender.emit();
  }
}
