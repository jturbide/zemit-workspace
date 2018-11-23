import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@components/page/page.component';

@Component({
  selector: 'we-docs-page',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsPageComponent implements PageComponent {

  constructor() { }

  ngOnInit() {
  }

}
