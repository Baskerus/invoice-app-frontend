import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarOpen;

  constructor() {}

  public toggleSidebar = () => {
    this.sidebarOpen = !this.sidebarOpen;
    console.log("sidebar open: ", this.sidebarOpen)
  };
}
