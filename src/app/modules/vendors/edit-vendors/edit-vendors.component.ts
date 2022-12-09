import { Router, ActivatedRoute } from '@angular/router';
import { VendorsService } from './../../services/vendors.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VendorModel } from './../../models/vendor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-vendors',
  templateUrl: './edit-vendors.component.html',
  styleUrls: ['./edit-vendors.component.css']
})
export class EditVendorsComponent implements OnInit {
  Vendorid:number=0;

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
      this.vendorModel.observation,
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private vendorServiec: VendorsService,
    private router: Router,
     private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(p=>{
      console.log(p['id']);
      this.Vendorid=p['id'] as number;
      this.loadVendor(this.Vendorid)
    })
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.vendorsForm = this.formBuilder.group({
      name: [
        this.vendorModel.name,
        Validators.compose([
          Validators.required,
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
    this.vendorServiec.update(this.Vendorid,this.vendorModel)
    // .subscribe((vendors) => {
    //   console.log(this.vendorsForm);
      this.router.navigate(['/vendors']);
    // });
  }

  loadVendor(id:number){
    this.vendorServiec.getById(id)
    // .subscribe(vendor=>{
    //   console.log(vendor);
      this.vendorModel= this.vendorServiec.getById(id)
    //   console.log(this.vendorModel);

    // })
  }



}
