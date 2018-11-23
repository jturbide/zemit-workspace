import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@components/page/page.component';

@Component({
  selector: 'de-about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutPageComponent implements PageComponent {

  constructor() { }

  ngOnInit() {
  }

}
