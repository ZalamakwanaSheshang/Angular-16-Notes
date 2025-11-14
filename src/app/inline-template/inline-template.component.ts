import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: `
    <h1 id="inline-template">
    This is inline-template component where .html file is missing in component folder.
    </h1>
  `,
  styleUrls: ['./inline-template.component.css']
})
export class InlineTemplateComponent {

}
