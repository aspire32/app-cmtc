import { DatePipe } from '@angular/common';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { TechniciensService } from './../../services/techniciens.service';
import { SortiesService } from './../../services/sorties.service';
import { Router } from '@angular/router';
import { CategriesService } from './../../services/categries.service';
import { ProductsService } from './../../services/products.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CategoryModel } from './../../models/category.model';
import { SortieModel } from './../../models/sortie.model';
import { ProductModel } from './../../models/product.model';
import { TechnicianModel } from './../../models/technician.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sortie',
  templateUrl: './add-sortie.component.html',
  styleUrls: ['./add-sortie.component.css']
})
export class AddSortieComponent implements OnInit {
  dateSortieOptions: FlatpickrOptions = {
    enableTime:false,
    altInput:true,
    altInputClass:'form-control form-control-lg form-control-solid',

  };
  sortieModel : SortieModel={
    quantite:0,
    observation:'',
    technician:{},
    product:{category:{}},
    dateSortie:''
    };

    selectedDateSortie:string=''

    products:ProductModel[]=[];
    technicians:TechnicianModel[]=[];
    SortieForm:FormGroup=this.formBuilder.group({

      product:[
        this.sortieModel.product?.idPiece,
        Validators.compose([
          Validators.required,

        ])
      ],
      observation:[
        this.sortieModel.observation
      ],
      quantite:[
        this.sortieModel.quantite,
        Validators.compose([
          Validators.required,Validators.min(1)
        ])
      ],
      technician:[
          this.sortieModel.technician?.id,
        Validators.compose([Validators.required,Validators.min(0)])
      ],
      dateSortie:[
        this.selectedDateSortie,
        Validators.compose([
          Validators.required
        ])
      ],
    }
    )


    constructor(private formBuilder:FormBuilder,
      private productService:ProductsService,
      private techniciensService:TechniciensService,
      private sortiesService:SortiesService,
      private router:Router,
      private datePipe:DatePipe

      ) {

        this.sortieModel.product=new ProductModel
        this.sortieModel.technician=new TechnicianModel

      }
      getAllProducts(){
        this.productService.getAll().subscribe(p=>{

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
        })
      }
      getAllTechnicians(){
        this.techniciensService.getAll().subscribe(techs=>{
          let checktechnicians=localStorage.getItem("technicians");
          if(checktechnicians?.length||0>2){
            let localcategories:any=localStorage.getItem("technicians");
            this.technicians=JSON.parse(localcategories);
            console.log(this.technicians);
          }else{
            this.technicians=techs;
            console.log(this.technicians);
            localStorage.setItem("technicians",JSON.stringify(this.technicians));
          }
           })
      }
    ngOnInit(): void {
      this.getAllProducts()
      this.getAllTechnicians()
      this.initForm()
    }

    initForm(){

      this.SortieForm=this.formBuilder.group({

        product:[
          this.sortieModel.product?.idPiece,
          Validators.compose([
            Validators.required,

          ])
        ],
        observation:[
          this.sortieModel.observation
        ],
        quantite:[
          this.sortieModel.quantite,
          Validators.compose([
            Validators.required
          ])
        ],
        technician:[
            this.sortieModel.technician?.id,
          Validators.compose([Validators.required,Validators.min(0)])
        ],

      dateSortie:[
        this.selectedDateSortie,
        Validators.compose([
          Validators.required
        ])
      ],
      }
      )

    }
    submit($event:any){

      this.sortieModel.dateSortie=this.datePipe.transform(this.selectedDateSortie,"yyy-MM-dd'T'HH:MM:SS'Z'")?.toString()

    console.log(this.sortieModel);
    console.log(this.SortieForm);
    this.sortiesService.create(this.sortieModel)
    // .subscribe(sortie=>{
    //   console.log(sortie);
      this.router.navigate(["/sorties"]);
    // })

  }


}
