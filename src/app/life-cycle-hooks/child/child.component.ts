import { Component, Input } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() myCounter!:number;

ngOnChanges(){
  console.log('ngOnChanges');
}
}
