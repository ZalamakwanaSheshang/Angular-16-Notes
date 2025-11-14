import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


const routes:Routes = [];

@NgModule({
    // Use forChild() for feature modules
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ModuleRoutingModule{}