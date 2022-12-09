import { DatePipe } from '@angular/common';
import { FlatpickrOptions } from 'ng2-flatpickr';
import {French} from 'flatpickr/dist/l10n/fr.js';

import { CategoryModel } from './../../models/category.model';
import { ProductModel } from './../../models/product.model';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategriesService } from './../../services/categries.service';
import { ProductsService } from './../../services/products.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
selectedDateEntree:string=''
selectedExpirationDate:string=''
panelOpenState = false;

categories:CategoryModel[]=[];
  dateEntreeOptions: FlatpickrOptions = {
    enableTime:false,
    locale:French,
    altInput:true,
    altInputClass:'form-control form-control-lg form-control-solid',

  };
  expirationDateOptions: FlatpickrOptions = {
    locale:French,
    enableTime:false,
    altInput:true,
    altInputClass:'form-control form-control-lg form-control-solid',


  };
  basePath

  productid:number=0;
  productModel : ProductModel={
    idPiece:0,
    product_id:'',
    libelle:'',
    category:{},
    initialStock:0,
    alertThreshold:0,
    // description:'',
    // storage:0,
    comments:'',
    dateEntree:'',
    expirationDate:'',
    fabrication:'',
    nlot:'',
    codeLot:'',
    prix:0,
    codeProduit:'',
    ncas:'',
    conditionStockage:'',
    emplacments:''
    };
  productForm:FormGroup=this.formBuilder.group({
      name:[
        this.productModel.libelle,
        Validators.compose([
          Validators.required
        ])
      ],
      category:[
        this.productModel.category.description,
        Validators.compose([Validators.required])
      ],
      stockInial:[
        this.productModel.initialStock,
        Validators.compose([Validators.min(0)])
      ],
      seuilAlerte:[
        this.productModel.alertThreshold,
        Validators.compose([Validators.min(0)])
      ],
      observation:[
        this.productModel.comments
      ],
      dateEntree:[
        this.productModel.dateEntree,
      ],
      expirationDate:[
        this.productModel.expirationDate,
      ],
      codeLot:[
        this.productModel.codeLot,
      ],
      fabrication:[
        this.productModel.fabrication,
      ],
      nlot:[
        this.productModel.nlot,
      ],
      prix:[
        this.productModel.prix,
      ],
      codeProduit:[
        this.productModel.codeProduit,
      ],
      ncas:[
        this.productModel.ncas,

      ],
      conditionStockage:[
        this.productModel.conditionStockage,

      ],
      emplacments:[
        this.productModel.emplacments,
      ],
    danger:[
      this.productModel.danger
    ]
    }
    )
  constructor(private formBuilder:FormBuilder,
    private productService:ProductsService,
    private categoryService:CategriesService,
    private router:Router,
    private datePipe:DatePipe,
    private activatedRoute:ActivatedRoute) {
      this.productModel.category=new CategoryModel
      this.activatedRoute.params.subscribe(p=>{
        console.log(p['id']);
        this.productid=p['id'] as number;
        this.loadProduct(this.productid)
      })
      this.basePath = window.location.host.includes('localhost') ? '' : '/app-cmtc';
    }
    getAllCategories(){
      this.categoryService.getAll().subscribe(categories=>{
        let checkCategories=localStorage.getItem("categories");
        if(checkCategories?.length||0>2){
          let localcategories:any=localStorage.getItem("categories");
          this.categories=JSON.parse(localcategories);
          console.log(this.categories);
        }else{
          this.categories=categories;
          console.log(this.categories);
          localStorage.setItem("categories",JSON.stringify(this.categories));
        }

      })
    }


  ngOnInit(): void {
    this.getAllCategories()
    this.initForm()
  }

  initForm(){
    this.getAllCategories
    this.productForm=this.formBuilder.group({
      name:[
        this.productModel.libelle,
        Validators.compose([
          Validators.required
        ])
      ],
      categoryid:[
        this.productModel.category.id,
        Validators.compose([Validators.required])
      ],
      stockInial:[
        this.productModel.initialStock,
        Validators.compose([Validators.min(0)])
      ],
      seuilAlerte:[
        this.productModel.alertThreshold,
        Validators.compose([Validators.min(0)])
      ],
      observation:[
        this.productModel.comments
      ],
      dateEntree:[
        this.productModel.dateEntree,
      ],
      expirationDate:[
        this.productModel.expirationDate,
      ],
      codeLot:[
        this.productModel.codeLot,
      ],
      fabrication:[
        this.productModel.fabrication,
      ],
      nlot:[
        this.productModel.nlot,
      ],
      prix:[
        this.productModel.prix,
      ],
      codeProduit:[
        this.productModel.codeProduit,
      ],
      ncas:[
        this.productModel.ncas,
      ],
      conditionStockage:[
        this.productModel.conditionStockage,
      ],
      emplacments:[
        this.productModel.emplacments,
      ],
      danger:[
        this.productModel.danger
      ]
    }
    )

  }
  submit($event:any){
    this.productModel.dateEntree=this.datePipe.transform(this.productModel.dateEntree,"yyy-MM-dd'T'HH:MM:SS'Z'")?.toString()
    this.productModel.expirationDate=this.datePipe.transform( this.productModel.expirationDate,"yyyy-MM-dd'T'HH:MM:SS'Z'")?.toString()
  console.log(this.productForm);
  console.log(this.productModel);
  this.productService.update(this.productid,this.productModel)
  // .subscribe(product=>{
    // console.log(product);
    this.router.navigate(["/products"]);
  // })
}

loadProduct(id:number){
  // this.productService.getById(id)
  // .subscribe(product=>{
  //   console.log(product);
    this.productModel=this.productService.getById(id)
    //  this.selectedDateEntree=this.datePipe.transform("2022-03-19T00:01:00Z","dd/MM/yyyy HH:MM")?.toString()||'';
    // this.selectedExpirationDate=this.datePipe.transform("2022-04-15T00:01:00Z","dd/MM/yyyy HH:MM")?.toString()||'';

    // console.log(this.selectedDateEntree);
    // console.log(this.selectedExpirationDate);
    // let dateentre:Date=new Date(product.dateEntree?.toString()||'');
    // this.productModel.dateEntree=this.datePipe.transform(dateentre,"Y-m-d")?.toString();
    // this.selectedDateEntree=this.productModel.dateEntree?.toString()||'';

    // let dateExperation:Date=new Date(product.expirationDate?.toString()||'');
    // this.productModel.expirationDate=this.datePipe.transform(dateExperation,"Y-m-d")?.toString();
    // this.selectedExpirationDate=this.productModel.expirationDate?.toString()||'';
    // console.log(this.productModel);
    console.log(this.productModel);
  // })
}
}
