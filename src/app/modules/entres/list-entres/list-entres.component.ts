import { Router } from '@angular/router';
import { EntresService } from './../../services/entres.service';
import { EntreeModel } from './../../models/entree.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-entres',
  templateUrl: './list-entres.component.html',
  styleUrls: ['./list-entres.component.css']
})
export class ListEntresComponent implements OnInit {

  showProductForm=true;

  entresList:EntreeModel[]=[]



  constructor(private entresService:EntresService,

    private router:Router) { }



    ngOnInit(): void {
      this.loadEntrees()
    }
    loadEntrees(){
      this.entresService.getAll().subscribe(
        s=>{
          let checkentrees=localStorage.getItem("entrees");
          if(checkentrees?.length||0>2){
            let localentrees:any=localStorage.getItem("entrees");
            this.entresList=JSON.parse(localentrees);
            console.log(this.entresList);
          }else{
            this.entresList=s;
            console.log(this.entresList);
            localStorage.setItem("entrees",JSON.stringify(this.entresList));
          }
        }
      );
    }

  showProductFormChange(value:boolean){
    this.showProductForm=value;
  //  document.getElementsByClassName("modal-backdrop").item(0)?.remove();
  //  document.getElementsByTagName("body").item(0)?.classList.remove("modal-open");
  //  document.getElementsByTagName("body").item(0)?.removeAttribute("style")
  }
  showForm(){
    this.showProductForm=true
  }
  delete(id:any){
    this.entresService.delete(id)
    // .subscribe(x=>{
    this.router.navigate(["/entres"]);
    this.loadEntrees()
    // })
  }

  calculeTotal(quantite:number,puHt:number){
    return quantite*puHt;
  }

}
