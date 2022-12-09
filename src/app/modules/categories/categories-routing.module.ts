import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:ListCategoriesComponent},
      {path:'add',component:AddCategorieComponent},
      {path:':id',component:UpdateCategorieComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
