import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendorModel } from './../models/vendor.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {
  constructor(private http:HttpClient) {


  }
    getAll():Observable<VendorModel[]>{

      return this.http.get<VendorModel[]>('./assets/jsons/vendors.json')
    }

    create(vendor:any):any{
      // console.log(product);

      // return this.http.post('http://localhost:8080/vendors',product)
      let localvendors:any=localStorage.getItem("vendors");
      let vendors:VendorModel[]=JSON.parse(localvendors)

      let length=vendors.length;
      vendor.id=(length||1)+1
      vendors.push(vendor)
      localStorage.setItem("vendors",JSON.stringify(vendors))

    }

    getById(id:number) :VendorModel{
      // return this.http.get<VendorModel>(`http://localhost:8080/vendors/${id}`)
      let localvendors:any=localStorage.getItem("vendors");
      let vendors:VendorModel[]=JSON.parse(localvendors)
      return vendors.find(x => x.id == id)||{};
    }

    update(id:number,vendor:any):VendorModel{
      // return this.http.put<VendorModel>(`http://localhost:8080/vendors/${id}`,vendor)
      let localvendors:any=localStorage.getItem("vendors");
      let vendors:VendorModel[]=JSON.parse(localvendors)
      let searchtechnician= vendors.find(x => x.id == id)||{};
      let index=vendors.findIndex(x=>x.id==id);
      vendors[index]=vendor;
      localStorage.setItem("vendors",JSON.stringify(vendors))

      return vendors[index];
    }
    delete(id:number):any{
      // return this.http.delete<any>(`http://localhost:8080/vendors/${id}`);

      let localvendors:any=localStorage.getItem("vendors");
      let vendors:VendorModel[]=JSON.parse(localvendors)
    let searchtechnicians= vendors.find(x => x.id == id)||{};
    let index=vendors.findIndex(x=>x.id==id);

    if (index !== -1) {
      vendors.splice(index, 1);
    }

    localStorage.setItem("vendors",JSON.stringify(vendors))


    return vendors[index];
    }
}
