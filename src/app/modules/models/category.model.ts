import { ProductModel } from './product.model';
import { Timestamp } from "rxjs";

export class CategoryModel{
  id?: number;
  category_id?:string;
  description?:string;
  observation?:string;
  created_at?:string;
  updated_at?:string;
  productsLists?:ProductModel[]=[]

  setCategory?(_category:unknown){
    const category=_category as CategoryModel;
    this.id=category.id;
    this.category_id=category.category_id;
    this.description=category.description || '';
    this.observation=category.observation || '';
    this.created_at=category.created_at;
    this.updated_at=category.updated_at;

  }
  productLength?=()=>{
    return this.productsLists?.length
  }
}
