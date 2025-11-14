import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleLazyLoadingComponent } from './module-lazy-loading/module-lazy-loading.component';

const routes: Routes = [
  {path:'',component:ModuleLazyLoadingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModuleWithRoutingRoutingModule { }
