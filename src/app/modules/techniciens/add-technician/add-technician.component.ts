import { Router } from '@angular/router';
import { TechniciensService } from './../../services/techniciens.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TechnicianModel } from './../../models/technician.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-technician',
  templateUrl: './add-technician.component.html',
  styleUrls: ['./add-technician.component.css']
})
export class AddTechnicianComponent implements OnInit {

  technicianModel: TechnicianModel = {
    libelle: '',
    observation: '',
  };
  technicianForm: FormGroup = this.formBuilder.group({
    libelle: [
      this.technicianModel.libelle,
      Validators.compose([
        Validators.required
      ]),
    ],
    observation: [
      this.technicianModel.observation
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private techniciensService: TechniciensService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.technicianForm = this.formBuilder.group({
      libelle: [
        this.technicianModel.libelle,
        Validators.compose([
          Validators.required
        ]),
      ],
      observation: [
        this.technicianModel.observation
      ]
    });
  }
  submit($event: any) {
    console.log(this.technicianForm);
    console.log(this.technicianModel);
    this.techniciensService.create(this.technicianModel)
    // .subscribe((technician) => {
    //   console.log(this.technicianForm);
      this.router.navigate(['/technicians']);
    // });
  }

}
