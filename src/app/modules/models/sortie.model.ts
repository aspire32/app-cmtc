import { Timestamp } from "rxjs";
import { ProductModel } from "./product.model";
import { TechnicianModel } from "./technician.model";

export class SortieModel{
id?:number=0;
sortiesId?:string='';
dateSortie?:string='';
quantite?:number=0;
observation?:string='';
technician:TechnicianModel=new TechnicianModel;
product:ProductModel=new ProductModel;
created_at?:string='';
updated_at?:string='';

setSortie?(_sortie: unknown){
  const sortie=_sortie as SortieModel;
  this.id=sortie.id;
  this.sortiesId=sortie.sortiesId;
  this.dateSortie=sortie.dateSortie;
  this.quantite=sortie.quantite;
  this.observation=sortie.observation;
  this.technician=sortie.technician;
  this.product=sortie.product;
  this.created_at=sortie.created_at;
  this.updated_at=sortie.updated_at;

}
}
