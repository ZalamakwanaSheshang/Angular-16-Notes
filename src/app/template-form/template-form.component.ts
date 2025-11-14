import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importing NgForm for type checking

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  data = {
    name:'',
    age: null,
    agree:false
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log("Data:", this.data);
      // console.log("Data:", form.value);
      alert("Your Form is submitted"+ this.data);
    }
    else {
      console.log("Form is invalid.");
      alert("Form is invalid.");
    }
  }
}
