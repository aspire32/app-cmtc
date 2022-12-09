import { Router } from '@angular/router';
import { VendorsService } from './../../services/vendors.service';
import { Component, OnInit } from '@angular/core';
import { VendorModel } from '../../models/vendor.model';

@Component({
  selector: 'app-list-vendors',
  templateUrl: './list-vendors.component.html',
  styleUrls: ['./list-vendors.component.css']
})
export class ListVendorsComponent implements OnInit {

  showTechnicianForm=true;

  vendors:VendorModel[]=[]
  constructor(private vendorsService:VendorsService,
    private router:Router) { }

  ngOnInit(): void {
    this.loadVendors()
  }
  loadVendors(){
    this.vendorsService.getAll().subscribe(
      vendors=>{

        let checkvendors=localStorage.getItem("vendors");
        if(checkvendors?.length||0>2){
          let localvendors:any=localStorage.getItem("vendors");
          this.vendors=JSON.parse(localvendors);
          console.log(this.vendors);
        }else{
          this.vendors=vendors;
          console.log(this.vendors);
          localStorage.setItem("vendors",JSON.stringify(this.vendors));
        }

      }
    );
  }
  showProductFormChange(value:boolean){
    this.showTechnicianForm=value;

  }
  showForm(){
    this.showTechnicianForm=true
  }
  delete(id:any){
    this.vendorsService.delete(id)
    // .subscribe(x=>{
    this.router.navigate(["/vendors"]);
    this.loadVendors()
    // })
  }
  handlePiece(vendor:VendorModel){
    let nbrPiece:number=0;
    vendor.entrees?.map(entre=>{
      nbrPiece+=entre.quantite||0;
    })
    return nbrPiece;
  }

}
