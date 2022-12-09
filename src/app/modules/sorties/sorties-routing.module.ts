import { UpdateSortieComponent } from './update-sortie/update-sortie.component';
import { AddSortieComponent } from './add-sortie/add-sortie.component';
import { ListSortiesComponent } from './list-sorties/list-sorties.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:ListSortiesComponent},
  {path:'add',component:AddSortieComponent},
  {path:':id',component:UpdateSortieComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortiesRoutingModule { }
