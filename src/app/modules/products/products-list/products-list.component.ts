import { TokenStorageService } from './../../services/token-storage-service.service';
import { Router } from '@angular/router';
import { CategriesService } from './../../services/categries.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CategoryModel } from './../../models/category.model';
import { ProductModel } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  showProductForm=true;

  products:ProductModel[]=[]


  basePath
  constructor(private productsService:ProductsService,

    private router:Router,
    private tokenStorage:TokenStorageService
    ) {
      if (!this.tokenStorage.getToken()) {
        this.router.navigate(["/auth/login"]);
      }
      this.basePath = window.location.host.includes('localhost') ? '' : '/app-cmtc';

    }


    ngOnInit(): void {
      this.loadProduct()


    }
    loadProduct(){
      this.productsService.getAll().subscribe(
        p=>{

          let checkproducts=localStorage.getItem("products");
          if(checkproducts?.length||0>2){
            let localProducts:any=localStorage.getItem("products");
            this.products=JSON.parse(localProducts);
            console.log(this.products);
          }else{
            this.products=p;
            console.log(this.products);
            localStorage.setItem("products",JSON.stringify(this.products));
          }
        }
      );
    }

  showProductFormChange(value:boolean){
    this.showProductForm=value;
  //  document.getElementsByClassName("modal-backdrop").item(0)?.remove();
  //  document.getElementsByTagName("body").item(0)?.classList.remove("modal-open");
  //  document.getElementsByTagName("body").item(0)?.removeAttribute("style")
  }
  showForm(){
    this.showProductForm=true
  }
  delete(id:any){
    this.productsService.delete(id)
    // .subscribe(x=>{
    this.router.navigate(["/products"]);
    this.loadProduct()

    // })
  }

  checkDateExperation(date:any){
    if(date==""){
      return false
    }else{
      let datexperation:Date=new Date(date.toString()||'');
    return datexperation<=new Date();
    }

  }
}
