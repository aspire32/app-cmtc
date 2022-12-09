import { Timestamp } from "rxjs";
import { SortieModel } from "./sortie.model";

export class TechnicianModel{
  id?:number=0;
  TechnicianId?:string='';
  libelle?:string='';
  observation?:string='';
  sorties?:SortieModel[]=[];
  created_at?:string='';
  updated_at?:string='';

  setTechnician?(_technician:unknown){
    const technician=_technician as TechnicianModel
    this.id=technician.id;
    this.TechnicianId=technician.TechnicianId;
    this.libelle=technician.libelle;
    this.observation=technician.observation;
    this.sorties=technician.sorties;
    this.created_at=technician.created_at;
    this.updated_at=technician.updated_at;
  }

  productLength?=()=>{
    return this.sorties?.length
  }
}
