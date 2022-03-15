import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarOpen = false;

  constructor() {}

  public toggleSidebar = () => {
    this.sidebarOpen = !this.sidebarOpen;
    console.log('sidebar open: ', this.sidebarOpen);
  };

  getSidebarState(){
    return this.sidebarOpen;
  }
}
