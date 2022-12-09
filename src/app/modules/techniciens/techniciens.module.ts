import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListTechnicianComponent } from './list-technician/list-technician.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechniciensRoutingModule } from './techniciens-routing.module';
import { AddTechnicianComponent } from './add-technician/add-technician.component';
import { UpdateTechnicianComponent } from './update-technician/update-technician.component';


@NgModule({
  declarations: [
    ListTechnicianComponent,
    AddTechnicianComponent,
    UpdateTechnicianComponent
  ],
  imports: [
    CommonModule,
    TechniciensRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ListTechnicianComponent,
    AddTechnicianComponent,
    UpdateTechnicianComponent
  ]
})
export class TechniciensModule { }
