import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Invoice } from 'src/app/Invoice';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() openEvent = new EventEmitter();
  @Input() invoices: Invoice[];
  sidebarOpen = this.sidebarService.getSidebarState();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    console.log('OnInit sidebar is: ', this.sidebarOpen);
  }

  emitOpenEvent(e) {
    this.openEvent.emit(e);
  }
}
