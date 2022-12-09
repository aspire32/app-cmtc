import { DatePipe } from '@angular/common';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { EntresService } from './../../services/entres.service';
import { VendorsService } from './../../services/vendors.service';
import { Router } from '@angular/router';
import { SortiesService } from './../../services/sorties.service';
import { TechniciensService } from './../../services/techniciens.service';
import { ProductsService } from './../../services/products.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VendorsModule } from './../../vendors/vendors.module';
import { EntreeModel } from './../../models/entree.model';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { VendorModel } from '../../models/vendor.model';

@Component({
  selector: 'app-add-entres',
  templateUrl: './add-entres.component.html',
  styleUrls: ['./add-entres.component.css']
})
export class AddEntresComponent implements OnInit {
  dateEntreeOptions: FlatpickrOptions = {
    enableTime:false,
    altInput:true,
    altInputClass:'form-control form-control-lg form-control-solid',

  };
  selectedEntree:string=''

  entresModel : EntreeModel={
    refCommande:'',
    puHt:0,
    quantite:0,
    observation:'',
    vendor:{},
    product:{category:{}}
    };


    products:ProductModel[]=[];
    vendors:VendorModel[]=[];
    entresForm:FormGroup=this.formBuilder.group({

      product:[
        this.entresModel.product?.idPiece,
        Validators.compose([
          Validators.required,

        ])
      ],
      observation:[
        this.entresModel.observation,
      ],
      refCommande:[
        this.entresModel.refCommande
      ],
      quantite:[
        this.entresModel.quantite,
        Validators.compose([
          Validators.required
        ])
      ],
      vendor:[
          this.entresModel.vendor?.id,
        Validators.compose([Validators.required,Validators.min(0)])
      ],
      puHt:[
        this.entresModel.puHt,
        Validators.compose([
          Validators.required
        ])
      ],
      dateEntree:[
        this.selectedEntree,
        Validators.compose([
          Validators.required
        ])
      ],

    }
    )


    constructor(private formBuilder:FormBuilder,
      private productService:ProductsService,
      private vendorService:VendorsService,
      private entressService:EntresService,
      private router:Router,
      private datePipe:DatePipe


      ) {

        this.entresModel.product=new ProductModel
        this.entresModel.vendor=new VendorModel

      }
      getAllProducts(){
        this.productService.getAll().subscribe(products=>{
          let checkproducts=localStorage.getItem("products");

          if(checkproducts?.length||0>2){
            let localProducts:any=localStorage.getItem("products");
            this.products=JSON.parse(localProducts);
            console.log(this.products);
          }else{
            this.products=products;
            console.log(this.products);
            localStorage.setItem("products",JSON.stringify(this.products));
          }
        })
      }
      getAllVendors(){
        this.vendorService.getAll().subscribe(vendors=>{
          this.vendors=vendors;
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
        })
      }
    ngOnInit(): void {
      this.getAllProducts()
      this.getAllVendors()
      this.initForm()
    }

    initForm(){

      this.entresForm=this.formBuilder.group({

        product:[
          this.entresModel.product?.idPiece,
          Validators.compose([
            Validators.required,

          ])
        ],
        observation:[
          this.entresModel.observation,
        ],
        quantite:[
          this.entresModel.quantite,
          Validators.compose([
            Validators.required
          ])
        ],
        vendor:[
            this.entresModel.vendor?.id,
          Validators.compose([Validators.required,Validators.min(0)])
        ],
        puHt:[
          this.entresModel.puHt,
          Validators.compose([
            Validators.required
          ])
        ],
        refCommande:[
          this.entresModel.refCommande
        ],
      dateEntree:[
        this.selectedEntree,
        Validators.compose([
          Validators.required
        ])
      ],
      }
      )

    }
    submit($event:any){
      this.entresModel.dateEntree=this.datePipe.transform(this.selectedEntree,"yyy-MM-dd'T'HH:MM:SS'Z'")?.toString()

    console.log(this.entresModel);
    console.log(this.entresForm);
    this.entressService.create(this.entresModel)
    // .subscribe(entres=>{
      // console.log(entres);
      this.router.navigate(["/entres"]);
    // })
  }


  calculeTotal(quantite:number,puHt:number){
    return quantite*puHt;
  }



}
