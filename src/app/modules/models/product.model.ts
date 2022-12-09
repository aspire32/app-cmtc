import { Timestamp } from "rxjs";
import { CategoryModel } from "./category.model";
import { EntreeModel } from "./entree.model";
import { SortieModel } from "./sortie.model";

export class ProductModel{
  idPiece?:number;
  product_id?:String;
  libelle?:string='';
  category:CategoryModel=new CategoryModel();
  initialStock?:number=0;
  alertThreshold?:number=0;
  comments?:String='';
  created_at?:string;
  updated_at?:string;
  expirationDate?:string;
  dateEntree?:string;
  entreesList?:EntreeModel[]=[]
  sortieslist?:SortieModel[]=[];
  stockFinal?:number;
  fabrication?:string;
	nlot?:string;
	codeLot?:string;
	prix?:number;
codeProduit?:String ;
danger?:string;

ncas?:string;

conditionStockage?:string;

emplacments?:string;

  setProduct?(_product : unknown){
    const product=_product as ProductModel
    this.idPiece=product.idPiece;
    this.product_id=product.product_id;
    this.category=product.category;
    this.initialStock=product.initialStock;
    this.alertThreshold=product.alertThreshold;

    this.comments=product.comments;
    this.created_at=product.created_at;
    this.updated_at=product.updated_at;
    this.entreesList=product.entreesList;
    this.sortieslist=product.sortieslist;
    this.stockFinal=product.stockFinal;
    this.fabrication=product.fabrication;
	  this.nlot=product.nlot;
	  this.codeLot=product.codeLot;
	  this.prix=product.prix;

	  this.codeProduit=product.codeProduit;
	  this.ncas=product.ncas;
	  this.conditionStockage=product.conditionStockage;
	  this.emplacments=product.emplacments;
this.danger=product.danger

  }

}
