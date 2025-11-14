import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { InlineTemplateStyleComponent } from './inline-template-style/inline-template-style.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { IfElseAndLoopsComponent } from './if-else-and-loops/if-else-and-loops.component';
import { ComponentDataSharingComponent } from './component-data-sharing/component-data-sharing.component';
import { ValidatorsComponent } from './validators/validators.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { CdsChildComponent } from './cds-child/cds-child.component';
import { PipesComponent } from './pipes/pipes.component';
import { ModuleExampleComponent } from './module/module-example/module-example.component';

//

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'home',component: HomeComponent},
  { path: 'first-component',component: FirstComponentComponent},
  { path: 'inline-style', component: InlineStyleComponent},
  { path: 'inline-template', component: InlineTemplateComponent},
  { path: 'inline-template-style', component: InlineTemplateStyleComponent},
  { path: 'data-binding', component: DataBindingComponent },
  {path: 'if-else-and-loops',component: IfElseAndLoopsComponent},
  {path: 'component-data-sharing',component: ComponentDataSharingComponent},
  {path: 'validators',component:ValidatorsComponent},
  {path: 'template-form',component:TemplateFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent },
  {path: 'cds-child', component:CdsChildComponent},
  {path: 'pipes', component:PipesComponent},
  // eager loading
  {path: 'module', component:ModuleExampleComponent},
  // lazy loading
  {
    path: 'module-lazy',
    loadChildren: () => import('./module-with-routing/module-with-routing.module').then(m => m.ModuleWithRoutingModule)
  },
  {
    path: 'hooks',
    loadChildren: () => import('./life-cycle-hooks/life-cycle-hooks.module').then(m=>m.LifeCycleHooksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}