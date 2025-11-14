import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  name = "Sheshang";

  a = 10;
  b = 20;
  answer = this.a > this.b ? `A(${this.a})` : `B(${this.b})`;

  message: string = 'Hi, my name is Zala';

  gfg(value: string) {
    console.log(value);
    document.getElementById("eventBindingOutput")?.append(value);
  }

  color: string = "";
  count: number=0;

  increase() {
    this.count++;
  };
  decrese() {
    if(this.count>0){
    this.count--;}
  }

}
