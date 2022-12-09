import { DatePipe } from '@angular/common';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { French } from 'flatpickr/dist/l10n/fr.js';
import { Router, ActivatedRoute } from '@angular/router';
import { SortiesService } from './../../services/sorties.service';
import { TechniciensService } from './../../services/techniciens.service';
import { ProductsService } from './../../services/products.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TechnicianModel } from './../../models/technician.model';
import { ProductModel } from './../../models/product.model';
import { SortieModel } from './../../models/sortie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-sortie',
  templateUrl: './update-sortie.component.html',
  styleUrls: ['./update-sortie.component.css']
})
export class UpdateSortieComponent implements OnInit {
  sortieid:number=0;

  selectedDateSortie:string=''

  dateSortieOptions: FlatpickrOptions = {
    enableTime:false,
    locale:French,
    altInput:true,
    altInputClass:'form-control form-control-lg form-control-solid',

  };

  sortieModel : SortieModel={
    quantite:0,
    observation:'',
    technician:{},
    product:{category:{}}
    };


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
          Validators.required
        ])
      ],
      technician:[
          this.sortieModel.technician?.id,
        Validators.compose([Validators.required,Validators.min(0)])
      ]
      ,
      dateSortie:[
        this.sortieModel.dateSortie,
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
      private activatedRoute:ActivatedRoute,
      private datePipe:DatePipe
      ) {

        this.sortieModel.product=new ProductModel
        this.sortieModel.technician=new TechnicianModel
        this.activatedRoute.params.subscribe(p=>{
          console.log(p['id']);
          this.sortieid=p['id'] as number;
          this.loadSortie(this.sortieid)
        })
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
          }        })
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
          this.sortieModel.dateSortie,
          Validators.compose([
            Validators.required
          ])
        ],
      }
      )

    }
    submit($event:any){
      this.sortieModel.dateSortie=this.datePipe.transform(this.sortieModel.dateSortie,"yyy-MM-dd'T'HH:MM:SS'Z'")?.toString()

    console.log(this.sortieModel);
    console.log(this.SortieForm);
    this.sortiesService.update(this.sortieid,this.sortieModel)
    // .subscribe(sortie=>{
    //   console.log(sortie);
      this.router.navigate(["/sorties"]);
    // })

  }

  loadSortie(id:number){
    // this.sortiesService.getById(id).subscribe(sortie=>{
    //   console.log(sortie);
      this.sortieModel=this.sortiesService.getById(id)
      // console.log(this.sortieModel);

      // let dateentre:Date=new Date(sortie.dateSortie?.toString()||'');
      // this.sortieModel.dateSortie=this.datePipe.transform(dateentre,"Y-m-d")?.toString();
      // this.selectedDateSortie=this.sortieModel.dateSortie?.toString()||'';


    // })
  }

}
