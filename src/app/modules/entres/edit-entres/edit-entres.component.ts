import { DatePipe } from '@angular/common';
import { French } from 'flatpickr/dist/l10n/fr.js';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { Router, ActivatedRoute } from '@angular/router';
import { EntresService } from './../../services/entres.service';
import { VendorsService } from './../../services/vendors.service';
import { ProductsService } from './../../services/products.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VendorModel } from './../../models/vendor.model';
import { ProductModel } from './../../models/product.model';
import { EntreeModel } from './../../models/entree.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-entres',
  templateUrl: './edit-entres.component.html',
  styleUrls: ['./edit-entres.component.css']
})
export class EditEntresComponent implements OnInit {
  entreeid:number=0;

  dateEntreeOptions: FlatpickrOptions = {
    enableTime:false,
    locale:French,
    altInput:true,
    altInputClass:'form-control form-control-lg form-control-solid',

  };
  selectedDateEntree:string=''

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
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(256)
        ])
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
        this.entresModel.dateEntree,
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
      private activatedRoute:ActivatedRoute,
      private datePipe:DatePipe

      ) {

        this.entresModel.product=new ProductModel
        this.entresModel.vendor=new VendorModel
        this.activatedRoute.params.subscribe(p=>{
          console.log(p['id']);
          this.entreeid=p['id'] as number;
          this.loadEntrer(this.entreeid)
        })

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
          }        })
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
          this.entresModel.observation
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
        this.entresModel.dateEntree,
        Validators.compose([
          Validators.required
        ])
      ],
      }
      )

    }
    submit($event:any){
      this.entresModel.dateEntree=this.datePipe.transform(this.entresModel.dateEntree,"yyy-MM-dd'T'HH:MM:SS'Z'")?.toString()

    console.log(this.entresModel);
    console.log(this.entresForm);
    this.entressService.update(this.entreeid,this.entresModel)
    // .subscribe(entres=>{
    //   console.log(entres);
      this.router.navigate(["/entres"]);
    // })
  }


  calculeTotal(quantite:number,puHt:number){
    return quantite*puHt;
  }



  loadEntrer(id:number){
    // this.entressService.getById(id).subscribe(sortie=>{
    //   console.log(sortie);
      this.entresModel=this.entressService.getById(id)
      // let dateentre:Date=new Date(sortie.dateEntree?.toString()||'');
      // this.entresModel.dateEntree=this.datePipe.transform(dateentre,"Y-m-d")?.toString();
      // this.selectedDateEntree=this.entresModel.dateEntree?.toString()||'';

      // console.log(this.entresModel);

    // })
  }

}
