import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifeCycleHooksRoutingModule } from './life-cycle-hooks-routing.module';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    LifeCycleHooksRoutingModule
  ]
})
export class LifeCycleHooksModule { }
