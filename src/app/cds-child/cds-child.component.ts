import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cds-child',
  templateUrl: './cds-child.component.html',
  styleUrls: ['./cds-child.component.css']
})
export class CdsChildComponent {
  // 1. RECEIVING DATA (Parent to Child)
  @Input() dataFromParent!: string;

  // 2. Sending Data (Child to Parent)
  @Output() dataToParent = new EventEmitter<string>();

  childData = 'Data from the Child!';

  // Method called on button click to emit the data
  sendDataToParent() {
    this.dataToParent.emit(this.childData);
  }
}
