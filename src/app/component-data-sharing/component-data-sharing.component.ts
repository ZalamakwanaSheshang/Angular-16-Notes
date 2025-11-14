import { Component } from '@angular/core';

@Component({
  selector: 'app-component-data-sharing',
  templateUrl: './component-data-sharing.component.html',
  styleUrls: ['./component-data-sharing.component.css']
})
export class ComponentDataSharingComponent {
  
  // 1. Parent to Child
  parentData = "This is from the parent!"

  // 2. Child to parent
  // variable (property) to hold data coming from child
  childDataReceived: string | undefined;

  // method to handle the event emitted by the child
  receiveDataFromChild(data: string) {
    this.childDataReceived = data;
    console.log('Parent Received: ', data);
  }

}
