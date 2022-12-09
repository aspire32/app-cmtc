import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';


@NgModule({
  declarations: [
    ListCategoriesComponent,
    AddCategorieComponent,
    UpdateCategorieComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ListCategoriesComponent,
    AddCategorieComponent
  ]
})
export class CategoriesModule { }
