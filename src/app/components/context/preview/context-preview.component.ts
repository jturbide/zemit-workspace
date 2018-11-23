import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@components/page/page.component';

@Component({
  selector: 'de-context-preview',
  templateUrl: './context-preview.component.html',
  styleUrls: ['./context-preview.component.scss']
})
export class ContextPreviewPageComponent implements PageComponent {

  constructor() { }

  ngOnInit() {
  }

}
