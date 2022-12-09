import { Timestamp } from "rxjs";
import { ProductModel } from "./product.model";
import { VendorModel } from "./vendor.model";

export class EntreeModel{
  id?:number=0;
  entreeID?:string='';
  dateEntree?:string='';
  refCommande?:String='';
  product:ProductModel=new ProductModel;
  vendor:VendorModel=new VendorModel;
  observation?:string='';
  quantite?:number=0;
  puHt?:number=0;
  created_at?:string='';
  updated_at?:string='';

  setEntree?(_entree: unknown){
    const entree=_entree as EntreeModel;
    this.id=entree.id;
    this.entreeID=entree.entreeID;
    this.refCommande=entree.refCommande;
    this.product=entree.product;
    this.vendor=entree.vendor;
    this.observation=entree.observation;
    this.quantite=entree.quantite;
    this.puHt=entree.puHt;
    this.created_at=entree.created_at;
    this.updated_at=entree.updated_at;

  }
}
