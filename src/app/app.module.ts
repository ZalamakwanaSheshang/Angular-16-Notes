import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { InlineTemplateStyleComponent } from './inline-template-style/inline-template-style.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IfElseAndLoopsComponent } from './if-else-and-loops/if-else-and-loops.component';
import { ComponentDataSharingComponent } from './component-data-sharing/component-data-sharing.component';
import { ValidatorsComponent } from './validators/validators.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { CdsChildComponent } from './cds-child/cds-child.component';
import { PipesComponent } from './pipes/pipes.component';

// Featured Modules
import { ModuleModule } from './module/module.module';
import { ModuleWithRoutingModule } from './module-with-routing/module-with-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    InlineStyleComponent,
    InlineTemplateComponent,
    InlineTemplateStyleComponent,
    DataBindingComponent,
    NavBarComponent,
    IfElseAndLoopsComponent,
    ComponentDataSharingComponent,
    ValidatorsComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    HomeComponent,
    CdsChildComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
