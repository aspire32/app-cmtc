import { Router } from '@angular/router';
import { VendorsService } from './../../services/vendors.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VendorModel } from './../../models/vendor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vendors',
  templateUrl: './add-vendors.component.html',
  styleUrls: ['./add-vendors.component.css']
})
export class AddVendorsComponent implements OnInit {

  vendorModel: VendorModel = {
    name: '',
    observation: '',
  };
  vendorsForm: FormGroup = this.formBuilder.group({
    name: [
      this.vendorModel.name,
      Validators.compose([
        Validators.required,
      ]),
    ],
    observation: [
      this.vendorModel.observation
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private vendorServiec: VendorsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.vendorsForm = this.formBuilder.group({
      name: [
        this.vendorModel.name,
        Validators.compose([
          Validators.required
        ]),
      ],
      observation: [
        this.vendorModel.observation,
      ]
    });
  }
  submit($event: any) {
    console.log(this.vendorModel);
    console.log(this.vendorsForm);
    this.vendorServiec.create(this.vendorModel)
    // .subscribe((technician) => {
    //   console.log(this.vendorsForm);
      this.router.navigate(['/vendors']);
    // });
  }



}
