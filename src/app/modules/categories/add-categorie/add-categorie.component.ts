import { Router } from '@angular/router';
import { CategriesService } from './../../services/categries.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CategoryModel } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css'],
})
export class AddCategorieComponent implements OnInit {
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
      this.categorieModel.observation
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategriesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.categorieForm = this.formBuilder.group({
      description: [
        this.categorieModel.description,
        Validators.compose([
          Validators.required
        ]),
      ],
      observation: [
        this.categorieModel.observation
      ],
    });
  }
  submit($event: any) {
    console.log(this.categorieForm);
    console.log(this.categorieModel);
    this.categoryService.create(this.categorieModel)
    // .subscribe((category) => {
    //   console.log(category);
      this.router.navigate(['/categories']);
    // });
  }
}
