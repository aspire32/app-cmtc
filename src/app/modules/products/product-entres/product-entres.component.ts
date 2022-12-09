import { TokenStorageService } from './../../services/token-storage-service.service';
import { ProductModel } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EntresService } from '../../services/entres.service';
import { EntreeModel } from '../../models/entree.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-entres',
  templateUrl: './product-entres.component.html',
  styleUrls: ['./product-entres.component.css']
})
export class ProductEntresComponent implements OnInit {

  showProductForm=true;

  productModel : ProductModel={
    idPiece:0,
    product_id:'',
    libelle:'',
    category:{},
    initialStock:0,
    alertThreshold:0,
    comments:'',
    dateEntree:'',
    expirationDate:'',
    entreesList:[],
    sortieslist:[],
    };
  productid:number=0

  constructor(
    private productService:ProductsService,
    private entreeService:EntresService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private tokenStorage:TokenStorageService) {
      if (!this.tokenStorage.getToken()) {
        this.router.navigate(["/auth/login"]);
      }
      this.activatedRoute.params.subscribe(p=>{
        console.log(p['id']);
        this.productid=p['id'] as number;
        this.loadEntrees(this.productid)
      })
    }



    ngOnInit(): void {
    }
    loadEntrees(productid:number){
      // this.productService.getById(productid).subscribe(
        // p=>{
          this.productModel=this.productService.getById(productid)
          console.log(this.productModel);
      //   }
      // );
    }

  showProductFormChange(value:boolean){
    this.showProductForm=value;
  }
  showForm(){
    this.showProductForm=true
  }
  delete(id:any){
    this.entreeService.delete(id)
    // .subscribe(x=>{
    // this.router.navigate(["/entres"]);
    this.loadEntrees(this.productid)
  // })
  }

  calculeTotal(quantite:number,puHt:number){
    return quantite*puHt;
  }

}
