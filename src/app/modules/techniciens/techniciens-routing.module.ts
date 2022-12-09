import { UpdateTechnicianComponent } from './update-technician/update-technician.component';
import { AddTechnicianComponent } from './add-technician/add-technician.component';
import { ListTechnicianComponent } from './list-technician/list-technician.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {path:'',component:ListTechnicianComponent},
      {path:'add',component:AddTechnicianComponent},
      {path:':id',component:UpdateTechnicianComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechniciensRoutingModule { }
