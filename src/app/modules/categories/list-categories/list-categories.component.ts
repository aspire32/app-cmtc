import { CategoryModel } from './../../models/category.model';
import { Router } from '@angular/router';
import { CategriesService } from './../../services/categries.service';
import { CategoriesModule } from './../categories.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  showCategoryForm=true;

  categories:CategoryModel[]=[]
  constructor(private categoryService:CategriesService,
    private router:Router) { }

  ngOnInit(): void {
    this.loadCategories()
  }
  loadCategories(){
    this.categoryService.getAll().subscribe(
      cat=>{

        let checkCategories=localStorage.getItem("categories");
        if(checkCategories?.length||0>2){
          let localcategories:any=localStorage.getItem("categories");
          this.categories=JSON.parse(localcategories);
          console.log(this.categories);
        }else{
          this.categories=cat;
          console.log(this.categories);
          localStorage.setItem("categories",JSON.stringify(this.categories));
        }
      }
    );
  }
  showProductFormChange(value:boolean){
    this.showCategoryForm=value;

  }
  showForm(){
    this.showCategoryForm=true
  }
  delete(id:any){
    this.categoryService.delete(id)
    // .subscribe(x=>{
    this.router.navigate(["/categories"]);
    this.loadCategories()
    // })
  }
}
