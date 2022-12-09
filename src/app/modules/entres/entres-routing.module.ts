import { EditEntresComponent } from './edit-entres/edit-entres.component';
import { AddEntresComponent } from './add-entres/add-entres.component';
import { ListEntresComponent } from './list-entres/list-entres.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:ListEntresComponent},
  {path:'add',component:AddEntresComponent},
  {path:':id',component:EditEntresComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntresRoutingModule { }
