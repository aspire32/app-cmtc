import { EditVendorsComponent } from './edit-vendors/edit-vendors.component';
import { AddVendorsComponent } from './add-vendors/add-vendors.component';
import { ListVendorsComponent } from './list-vendors/list-vendors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:ListVendorsComponent},
  {path:'add',component:AddVendorsComponent},
  {path:':id',component:EditVendorsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }
