import { CategriesService } from './../../services/categries.service';
import { CategoryModel } from './../../models/category.model';
import { ProductsService } from './../../services/products.service';
import { ProductModel } from './../../models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormGroup,FormBuilder,Validators  } from "@angular/forms";
import { Router } from '@angular/router';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  panelOpenState = false;

 exampleOptions: FlatpickrOptions = {
  enableTime:false,
  altInput:true,

  altInputClass:'form-control form-control-lg form-control-solid',

};

selectedDateEntree:string=''
selectedExpirationDate:string=''
  productModel : ProductModel={
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
  emplacments:'',

  };
  @Output() showForm=new EventEmitter<boolean>();

  categories:CategoryModel[]=[];
  productForm:FormGroup=this.formBuilder.group({
    name:[
      this.productModel.libelle,
      Validators.compose([
        Validators.required,
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
      this.selectedDateEntree
    ],
    expirationDate:[
      this.selectedExpirationDate
    ],
    codeLot:[
      this.productModel.codeLot
    ],
    fabrication:[
      this.productModel.fabrication
    ],
    nlot:[
      this.productModel.nlot
    ],
    prix:[
      this.productModel.prix
    ],
    codeProduit:[
      this.productModel.codeProduit
    ],
    ncas:[
      this.productModel.ncas
    ],
    conditionStockage:[
      this.productModel.conditionStockage
    ],
    emplacments:[
      this.productModel.emplacments
    ]
    ,
    danger:[
      this.productModel.danger
    ]

  }
  )

  basePath
  constructor(private formBuilder:FormBuilder,
    private productService:ProductsService,
    private categoryService:CategriesService,
    private router:Router,
    private datePipe:DatePipe
    ) {

      this.productModel.category=new CategoryModel
      this.basePath = window.location.host.includes('localhost') ? '' : '/app-cmtc';
    }
    getAllCategories(){
      this.categoryService.getAll().subscribe(categories=>{
        // this.categories=categories;
        // console.log(categories);
        // console.log(this.categories);
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
        this.selectedDateEntree
      ],
      expirationDate:[
        this.selectedExpirationDate
      ],
      codeLot:[
        this.productModel.codeLot
      ],
      fabrication:[
        this.productModel.fabrication
      ],
      nlot:[
        this.productModel.nlot
      ],
      prix:[
        this.productModel.prix
      ],

    codeProduit:[
      this.productModel.codeProduit
    ],
    ncas:[
      this.productModel.ncas
    ],
    conditionStockage:[
      this.productModel.conditionStockage
    ],
    emplacments:[
      this.productModel.emplacments
    ],
    danger:[
      this.productModel.danger
    ]

    }
    )
  }
  submit($event:any){
    this.productModel.dateEntree=this.datePipe.transform(this.selectedDateEntree,"yyy-MM-dd'T'HH:MM:SS'Z'")?.toString()
    this.productModel.expirationDate=this.datePipe.transform(this.selectedExpirationDate,"yyyy-MM-dd'T'HH:MM:SS'Z'")?.toString()
    console.log(this.productModel.nlot);

    console.log(this.productForm);
    console.log(this.productModel);

  this.productService.create(this.productModel)
  // .subscribe(product=>{
    // console.log(product);
    this.showFormstatus(false);
    this.router.navigate(["/products"]);
  // })
}

  showFormstatus(value:boolean){
    this.showForm.emit(value);
  }
}
