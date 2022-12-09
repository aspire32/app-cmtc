import { EntreeModel } from './entree.model';
import { Timestamp } from "rxjs";

export class VendorModel{

  id?:number=0;
  VendorId?:string='';
  name?:string='';
  observation?:string=''
  created_at?:string='';
  updated_at?:string='';
  entrees?:EntreeModel[]=[];

  setVendor?(_vendor: unknown){
    const vendor = _vendor as VendorModel;
    this.id=vendor.id;
    this.VendorId=vendor.VendorId;
    this.name=vendor.name;
    this.observation=vendor.observation;
    this.created_at=vendor.created_at;
    this.updated_at=vendor.updated_at;
    this.entrees=vendor.entrees;
  }
}
