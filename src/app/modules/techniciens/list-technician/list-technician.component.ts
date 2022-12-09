import { Router } from '@angular/router';
import { TechniciensService } from './../../services/techniciens.service';
import { TechnicianModel } from './../../models/technician.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-technician',
  templateUrl: './list-technician.component.html',
  styleUrls: ['./list-technician.component.css']
})
export class ListTechnicianComponent implements OnInit {


  showTechnicianForm=true;

  technicians:TechnicianModel[]=[]
  constructor(private techniciensService:TechniciensService,
    private router:Router) { }

  ngOnInit(): void {
    this.loadTechniciens()
  }
  loadTechniciens(){
    this.techniciensService.getAll().subscribe(
      techs=>{
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
      }
    );
  }
  showProductFormChange(value:boolean){
    this.showTechnicianForm=value;

  }
  showForm(){
    this.showTechnicianForm=true
  }
  delete(id:any){
    this.techniciensService.delete(id)
    // .subscribe(x=>{
    this.router.navigate(["/technicians"]);
    this.loadTechniciens()
    // })
  }

  handlePiece(tech:TechnicianModel){
    let nbrPiece:number=0;
    tech.sorties?.forEach(sortie=>{
      nbrPiece+=sortie.quantite||0;
    })
    return nbrPiece;
  }
}
