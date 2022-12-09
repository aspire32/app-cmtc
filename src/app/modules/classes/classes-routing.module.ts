import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from 'src/app/default/default/default.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [{
  path:'classes',
  component:DefaultComponent,
  children:[{path:'overview', component:ClassesComponent}
  ,{path:'',redirectTo:'overview',pathMatch:'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
