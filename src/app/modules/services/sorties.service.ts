import { TechnicianModel } from './../models/technician.model';
import { ProductModel } from './../models/product.model';
import { Observable } from 'rxjs';
import { SortieModel } from './../models/sortie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortiesService {
  constructor(private http:HttpClient) { }

  getAll():Observable<SortieModel[]>{
    return this.http.get<SortieModel[]>('./assets/jsons/sorties.json')
  }

  create(sortie:SortieModel){
    // console.log('------------');
    // console.log(sortie);
    // return this.http.post('http://localhost:8080/sorties',sortie)
    let localsorties:any=localStorage.getItem("sorties");
    let sorties:SortieModel[]=JSON.parse(localsorties)
    let length=sorties.length;
    sortie.id=(length||1)+1

    let localProducts:any=localStorage.getItem("products");
    let products:ProductModel[]=JSON.parse(localProducts)
    let index=products.findIndex(x => x.idPiece == sortie.product.idPiece);
    products[index].stockFinal=(products[index].stockFinal||0)-(sortie.quantite||0);
    sortie.product=products[index]

    let localtechnicians:any=localStorage.getItem("technicians");
    let technicians:TechnicianModel[]=JSON.parse(localtechnicians)
    let tech:TechnicianModel= technicians.find(x => x.id == sortie.technician.id)||{};
    sortie.technician=tech;
    sorties.push(sortie)

    localStorage.setItem("sorties",JSON.stringify(sorties))

    localStorage.setItem("products",JSON.stringify(products))
  }

  getById(id:number) :any{
    // return this.http.get<SortieModel>(`http://localhost:8080/sorties/${id}`)
    let localsorties:any=localStorage.getItem("sorties");
    let sorties:SortieModel[]=JSON.parse(localsorties)
    return sorties.find(x => x.id == id)||null;
  }

  update(id:number,sortie:any):SortieModel{
    // return this.http.put<SortieModel>(`http://localhost:8080/sorties/${id}`,product)

    let localsorties:any=localStorage.getItem("sorties");
    let sorties:SortieModel[]=JSON.parse(localsorties)
    let index=sorties.findIndex(x=>x.id==id);
    sorties[index]=sortie;

    let localProducts:any=localStorage.getItem("products");
    let products:ProductModel[]=JSON.parse(localProducts)
    let indexp=products.findIndex(x => x.idPiece == sortie.product.idPiece);
    products[indexp].stockFinal=(products[index].stockFinal||0)-(sortie.quantite||0);
    sortie.product=products[indexp]

    let localtechnicians:any=localStorage.getItem("technicians");
    let technicians:TechnicianModel[]=JSON.parse(localtechnicians)
    let tech:TechnicianModel= technicians.find(x => x.id == sortie.technician.id)||{};
    sortie.technician=tech;
    sorties.push(sortie)

    localStorage.setItem("sorties",JSON.stringify(sorties))

    return sorties[index];
  }
  delete(id:number):any{
    // return this.http.delete<any>(`http://localhost:8080/sorties/${id}`);
    let localsorties:any=localStorage.getItem("sorties");
    let sorties:SortieModel[]=JSON.parse(localsorties)
    let index=sorties.findIndex(x=>x.id==id);

    if (index !== -1) {
      sorties.splice(index, 1);
    }

    localStorage.setItem("sorties",JSON.stringify(sorties))


    return sorties[index];

  }

}
