import { VendorModel } from './../models/vendor.model';
import { ProductModel } from './../models/product.model';
import { Observable } from 'rxjs';
import { EntreeModel } from './../models/entree.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntresService {

  constructor(private http:HttpClient) { }

  getAll():Observable<EntreeModel[]>{
    return this.http.get<EntreeModel[]>('./assets/jsons/entrees.json')
  }

  create(entree:EntreeModel){
    // console.log('------------');
    // console.log(sortie);
    // return this.http.post('http://localhost:8080/entres',sortie)
    let localentrees:any=localStorage.getItem("entrees");
    let entrees:EntreeModel[]=JSON.parse(localentrees)
    let length=entrees.length;
    entree.id=(length||1)+1
    entrees.push(entree)

    let localProducts:any=localStorage.getItem("products");
    let products:ProductModel[]=JSON.parse(localProducts)
    let index=products.findIndex(x => x.idPiece == entree.product.idPiece);
    products[index].stockFinal=(products[index].stockFinal||0)+(entree.quantite||0);
    entree.product=products[index]

    let localvendors:any=localStorage.getItem("vendors");
    let vendors:VendorModel[]=JSON.parse(localvendors)
    let vend:VendorModel= vendors.find(x => x.id == entree.vendor.id)||{};
    entree.vendor=vend;
    entrees.push(entree)

    localStorage.setItem("entrees",JSON.stringify(entrees))

    localStorage.setItem("products",JSON.stringify(products))
  }

  getById(id:number) :any{
    // return this.http.get<EntreeModel>(`http://localhost:8080/entres/${id}`)
    let localentrees:any=localStorage.getItem("entrees");
    let entrees:EntreeModel[]=JSON.parse(localentrees)
    return entrees.find(x => x.id == id)||null;
  }

  update(id:number,entree:any):EntreeModel{
    // return this.http.put<EntreeModel>(`http://localhost:8080/entres/${id}`,product)
    let localentrees:any=localStorage.getItem("entrees");
    let entrees:EntreeModel[]=JSON.parse(localentrees)
    let indexe=entrees.findIndex(x=>x.id==id);
    entrees[indexe]=entree;

    let localProducts:any=localStorage.getItem("products");
    let products:ProductModel[]=JSON.parse(localProducts)
    let index=products.findIndex(x => x.idPiece == entree.product.idPiece);
    products[index].stockFinal=(products[index].stockFinal||0)+(entree.quantite||0);
    entree.product=products[index]

    let localvendors:any=localStorage.getItem("vendors");
    let vendors:VendorModel[]=JSON.parse(localvendors)
    let vend:VendorModel= vendors.find(x => x.id == entree.vendor.id)||{};
    entree.vendor=vend;
    entrees.push(entree)

    localStorage.setItem("entrees",JSON.stringify(entrees))

    localStorage.setItem("products",JSON.stringify(products))
    return     entrees[indexe]
  }
  delete(id:number):any{
    // return this.http.delete<any>(`http://localhost:8080/entres/${id}`);
    let localentrees:any=localStorage.getItem("entrees");
    let entrees:EntreeModel[]=JSON.parse(localentrees)
    let index=entrees.findIndex(x=>x.id==id);

    if (index !== -1) {
      entrees.splice(index, 1);
    }

    localStorage.setItem("entrees",JSON.stringify(entrees))


    return entrees[index];

  }

}
