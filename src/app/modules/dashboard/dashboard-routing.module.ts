import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from 'src/app/default/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path:'dashboard',
  component:DefaultComponent,
  children:[
    {path:'overview', component:DashboardComponent},
    {path:'',redirectTo:'overview',pathMatch:'full'}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
