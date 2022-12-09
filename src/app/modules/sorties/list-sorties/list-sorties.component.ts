import { SortieModel } from './../../models/sortie.model';
import { Router } from '@angular/router';
import { SortiesService } from './../../services/sorties.service';
import { SortiesModule } from './../sorties.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-sorties',
  templateUrl: './list-sorties.component.html',
  styleUrls: ['./list-sorties.component.css']
})
export class ListSortiesComponent implements OnInit {

  showProductForm=true;

  sortiesList:SortieModel[]=[]



  constructor(private sortiesService:SortiesService,

    private router:Router) { }


    ngOnInit(): void {
      this.loadSorties()
    }
    loadSorties(){
      this.sortiesService.getAll().subscribe(
        s=>{
          this.sortiesList=s;
          console.log(this.sortiesList);

          let checksorties=localStorage.getItem("sorties");
          if(checksorties?.length||0>2){
            let localsorties:any=localStorage.getItem("sorties");
            this.sortiesList=JSON.parse(localsorties);
            console.log(this.sortiesList);
          }else{
            this.sortiesList=s;
            console.log(this.sortiesList);
            localStorage.setItem("sorties",JSON.stringify(this.sortiesList));
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
    this.sortiesService.delete(id)
    // .subscribe(x=>{
    this.router.navigate(["/sorties"]);
    this.loadSorties()
    // })
  }


}
