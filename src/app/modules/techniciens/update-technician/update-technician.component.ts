import { TechniciensService } from './../../services/techniciens.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TechnicianModel } from './../../models/technician.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-technician',
  templateUrl: './update-technician.component.html',
  styleUrls: ['./update-technician.component.css']
})
export class UpdateTechnicianComponent implements OnInit {

  technicianid:number=0;

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
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(p=>{
      console.log(p['id']);
      this.technicianid=p['id'] as number;
      this.loadCategorie(this.technicianid)
    })
  }
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
        this.technicianModel.observation,
      ]
    });

  }
  submit($event: any) {
    console.log(this.technicianForm);
  console.log(this.technicianModel);
  this.techniciensService.update(this.technicianid,this.technicianModel)
  // .subscribe(technician=>{
    // console.log(technician);
    this.router.navigate(["/technicians"]);
  // })
  }
  loadCategorie(id:number){
    // this.techniciensService.getById(id)
    // .subscribe(technicien=>{
    //   console.log(technicien);
      this.technicianModel=this.techniciensService.getById(id)
    //   console.log(this.technicianModel);

    // })
  }


}
