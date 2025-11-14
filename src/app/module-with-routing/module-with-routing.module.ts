import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleWithRoutingRoutingModule } from './module-with-routing-routing.module';
import { ModuleLazyLoadingComponent } from './module-lazy-loading/module-lazy-loading.component';

@NgModule({
  declarations: [ModuleLazyLoadingComponent],
  imports: [
    CommonModule,
    ModuleWithRoutingRoutingModule
  ]
})
export class ModuleWithRoutingModule { }
