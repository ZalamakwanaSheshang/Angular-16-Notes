import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  templateUrl: './inline-style.component.html',
  styles: [
    `
    #inline-style{
    border:1px solid black;
    box-shadow:10px 10px 10px black;
    background-color: orange;
    padding:0.5rem;
    text-align: center;
    }
    `
  ]
})
export class InlineStyleComponent {

}
