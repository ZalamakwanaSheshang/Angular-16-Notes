import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-and-loops',
  templateUrl: './if-else-and-loops.component.html',
  styleUrls: ['./if-else-and-loops.component.css']
})
export class IfElseAndLoopsComponent {

  // ------------------ ngIf -----------------------
  // shorthand example
  condition: string = "";

  // expanded example
  ngIfnumber: number = 0;

  // ngIf with then and else
  ageInput: number = 0;

  // Storing the Value Locally using ngIf
  fastival: string = ""
  localValue: string = "";

  // ------------------ ngSwitchCase ---------------
  number: number | null = null; //input value
  result: string = ""; // output value

  checkNumber(){
    if (this.number != null) {
      if (this.number > 0) {
        this.result = "positive";
      } else if (this.number < 0) {
        this.result = "negative"
      } else {
        this.result = "zero"
      }
    }
  }

  // ----------------------- ngFor -------------------
  employees = [
    { id: 101, name: "Sheshang Zalamakwana", dept: "Fullstack (.NET + Angular)" },
    { id: 102, name: "Mihirsinh Raj", dept: "Fullstack (.NET + Angular)" },
    { id: 103, name: "Vraj Shah", dept: "Fullstack (.Node + ReactJS)" },
    { id: 104, name: "Jimit Shah", dept: "Data Engineering" },
    { id: 105, name: "Krupal Joshi", dept: "AI/ML" },
    { id: 106, name: "Faizan Saikh", dept: "Devops"}
  ]
}
