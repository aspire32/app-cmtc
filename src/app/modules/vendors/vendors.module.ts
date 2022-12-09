import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { ListVendorsComponent } from './list-vendors/list-vendors.component';
import { AddVendorsComponent } from './add-vendors/add-vendors.component';
import { EditVendorsComponent } from './edit-vendors/edit-vendors.component';


@NgModule({
  declarations: [
    ListVendorsComponent,
    AddVendorsComponent,
    EditVendorsComponent,
  ],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ListVendorsComponent,
    AddVendorsComponent,
    EditVendorsComponent
  ]
})
export class VendorsModule { }
