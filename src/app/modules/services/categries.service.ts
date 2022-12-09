import { CategoryModel } from './../models/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategriesService {

  constructor(private http:HttpClient) { }

  getAll():Observable<CategoryModel[]>{
    return this.http
    .get<CategoryModel[]>
    ('./assets/jsons/categories.json')
  }

  create(category:any){
    // return this.http.post('http://localhost:8080/categories',category)
    let localCategories:any=localStorage.getItem("categories");
    let categories:CategoryModel[]=JSON.parse(localCategories)
    console.log("categories");
    console.log(categories);
    let length=categories.length;
    category.idPiece=(length||1)+1
    categories.push(category)
    localStorage.setItem("categories",JSON.stringify(categories))
  }

  delete(id:number):any{
    // return this.http.delete<any>(`http://localhost:8080/categories/${id}`);
    let localCategories:any=localStorage.getItem("categories");
    let categories:CategoryModel[]=JSON.parse(localCategories)
    let searchProduct= categories.find(x => x.id == id)||{};
    let index=categories.findIndex(x=>x.id==id);

    if (index !== -1) {
      categories.splice(index, 1);
    }

    localStorage.setItem("categories",JSON.stringify(categories))


    return categories[index];
  }
  getById(id:number) :CategoryModel{
    // return this.http.get<CategoryModel>(`http://localhost:8080/categories/${id}`)
    let localCategories:any=localStorage.getItem("categories");
    let categories:CategoryModel[]=JSON.parse(localCategories)
    return categories.find(x => x.id == id)||{};
  }

  update(id:number,categorie:any):CategoryModel{
    // return this.http.put<CategoryModel>(`http://localhost:8080/categories/${id}`,categorie)
    let localCategories:any=localStorage.getItem("categories");
    let categories:CategoryModel[]=JSON.parse(localCategories)
    let searchCategoryt= categories.find(x => x.id == id)||{};
    let index=categories.findIndex(x=>x.id==id);
    categories[index]=categorie;
    localStorage.setItem("categories",JSON.stringify(categories))

    return categories[index];
  }

}
