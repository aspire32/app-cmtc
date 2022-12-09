import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAll():Observable<ProductModel[]>{
    let token=localStorage.getItem('auth-token')||'';
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer '+token,
       'Content-Type': 'application/json' })
    };
    console.log(token);

    // return this.http.get<ProductModel[]>('http://localhost:8080/products')
   return this.http.get<ProductModel[]>('./assets/jsons/products.json')
  }

  create(product:ProductModel){


    // return this.http.post<ProductModel>('http://localhost:8080/products',product)
    // return this.http.get<any>('./assets/jsons/products.json',product)
    let localProducts:any=localStorage.getItem("products");
    let products:ProductModel[]=JSON.parse(localProducts)
    console.log("product");
    console.log(product);
    let length=products.length;
    product.idPiece=(length||1)+1
    products.push(product)
    localStorage.setItem("products",JSON.stringify(products))

  }

  getById(id:number) :ProductModel{
    // return this.http.get<ProductModel>(`http://localhost:8080/products/${id}`)
    let localProducts:any=localStorage.getItem("products");
    let products:ProductModel[]=JSON.parse(localProducts)
    return products.find(x => x.idPiece == id)||{category:{}};
  }

  update(id:number,product:any):ProductModel{
    // return this.http.put<ProductModel>(`http://localhost:8080/products/${id}`,product)
    let localProducts:any=localStorage.getItem("products");
    let products:ProductModel[]=JSON.parse(localProducts)
    let index=products.findIndex(x=>x.idPiece==id);
    products[index]=product;
    localStorage.setItem("products",JSON.stringify(products))

    return products[index];
  }
  delete(id:number):any{
    // return this.http.delete<any>(`http://localhost:8080/products/${id}`);
    let localProducts:any=localStorage.getItem("products");
    let products:ProductModel[]=JSON.parse(localProducts)
    let index=products.findIndex(x=>x.idPiece==id);

    if (index !== -1) {
      products.splice(index, 1);
    }

    localStorage.setItem("products",JSON.stringify(products))


    return products[index];
  }
}
