import { Router, ActivatedRoute } from '@angular/router';
import { CategriesService } from './../../services/categries.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CategoryModel } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {
  categorieid:number=0;

  categorieModel: CategoryModel = {
    description: '',
    observation: '',
  };
  categorieForm: FormGroup = this.formBuilder.group({
    description: [
      this.categorieModel.description,
      Validators.compose([
        Validators.required
      ]),
    ],
    observation: [
      this.categorieModel.observation,
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategriesService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(p=>{
      console.log(p['id']);
      this.categorieid=p['id'] as number;
      this.loadCategorie(this.categorieid)
    })
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.categorieForm = this.formBuilder.group({
      description: [
        this.categorieModel.description,
        Validators.compose([
          Validators.required,
        ]),
      ],
      observation: [
        this.categorieModel.observation,
      ],
    });
  }
  submit($event: any) {
    console.log(this.categorieForm);
  console.log(this.categorieModel);
  this.categoryService.update(this.categorieid,this.categorieModel)
  // .subscribe(product=>{
    // console.log(product);
    this.router.navigate(["/categories"]);
  // })
  }
  loadCategorie(id:number){
    // this.categoryService.getById(id)
    // .subscribe(categorie=>{
      // console.log(categorie);
      this.categorieModel= this.categoryService.getById(id)
    //   console.log(this.categorieModel);
    // })
  }
}
