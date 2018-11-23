import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '@components/sidebar/sidebar-content.component';

@Component({
  selector: 'we-sidebar-medias',
  templateUrl: './sidebar-medias.component.html',
  styleUrls: ['./sidebar-medias.component.scss']
})
export class SidebarMediasComponent implements OnInit, SidebarComponent {

  constructor() { }

  ngOnInit() {
  }

}
