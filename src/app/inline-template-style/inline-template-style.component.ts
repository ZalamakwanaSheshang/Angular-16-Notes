import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template-style',
  template: `
    <h1 id="inline-sty-temp">
    This is a component which is generated with inline-style and inline-template which dose not contain .htmml and .css file in component folder.
    </h1>
  `,
  styles: [
    `
    #inline-sty-temp{
    border: 1px solid black;
    box-shadow: 10px 10px 10px black;
    padding: 0.5rem;
    background-color: green;
    color: white;
    text-align: center;
    }
    `
  ]
})
export class InlineTemplateStyleComponent {

}
