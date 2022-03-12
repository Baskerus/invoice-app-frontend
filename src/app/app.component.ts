import { Component, OnInit } from '@angular/core';
import { SidebarService } from './service/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // THIS SHOULD BE MOVED TO A SEPARATE COMPONENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  open;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.open = this.sidebarService.sidebarOpen;
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
