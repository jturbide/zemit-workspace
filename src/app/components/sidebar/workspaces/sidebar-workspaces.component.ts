import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '@components/sidebar/sidebar-content.component';

@Component({
  selector: 'we-sidebar-workspaces',
  templateUrl: './sidebar-workspaces.component.html',
  styleUrls: ['./sidebar-workspaces.component.scss']
})
export class SidebarWorkspacesComponent implements OnInit, SidebarComponent {

  constructor() { }

  ngOnInit() {
  }

}
