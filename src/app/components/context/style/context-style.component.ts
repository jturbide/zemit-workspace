import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@components/page/page.component';

@Component({
  selector: 'de-context-style',
  templateUrl: './context-style.component.html',
  styleUrls: ['./context-style.component.scss']
})
export class ContextStylePageComponent implements PageComponent {

  constructor() { }

  ngOnInit() {
  }

}
