import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-sidebar-form',
  templateUrl: './sidebar-form.component.html',
  styleUrls: ['./sidebar-form.component.css'],
})
export class SidebarFormComponent implements OnInit {
  open;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.open = this.sidebarService.sidebarOpen;
  }
}
