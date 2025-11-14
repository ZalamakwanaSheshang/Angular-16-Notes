import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  //--------------------------------------------------
  // ngOnchanges
  private number:number = 0;

  get counter(){
    return this.number;
  }

  set counter(value:number){
    this.number = value;
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}
