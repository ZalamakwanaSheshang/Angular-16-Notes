import { Component } from '@angular/core';
// ---------------- imports for FormGroup  -----------------------------
import { FormGroup, FormControl,Validators } from '@angular/forms';
// ---------------- imports for FormBuilder  -----------------------------
import { FormBuilder } from '@angular/forms'; // Add FormGroup and Validator if not allready imported

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {


  // Code for Form using FormGroup
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email])
  });

  get emailControl() {
    return this.myForm.get('email')
  }

  
  // Code for Form using FormBuilder
  // builderForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  builderForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    age: [, [Validators.required, Validators.min(18), Validators.max(50)]]
  });
  
  // Shared Code amond both forms
  onSubmit() {
    console.log(this.myForm.value); // Outputs the form data
  }
}
