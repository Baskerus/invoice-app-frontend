import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sidebarOpen;

  constructor() {}

  ngOnInit(): void {}

  // Functions

  showSidebar(option: boolean) {
    option ? (this.sidebarOpen = true) : (this.sidebarOpen = false);
  }
}
