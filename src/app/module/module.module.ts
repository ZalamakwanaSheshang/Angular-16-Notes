import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleExampleComponent } from './module-example/module-example.component';
import { ModuleRoutingModule } from './module-routing.module';


@NgModule({
  declarations: [
    ModuleExampleComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ]
})
export class ModuleModule { }
