import { HttpClient } from '@angular/common/http';
import { TechnicianModel } from './../models/technician.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechniciensService {

  constructor(private http:HttpClient) {
  }
    getAll():Observable<TechnicianModel[]>{
      // return this.http.get<TechnicianModel[]>('http://localhost:8080/technician')

      return this.http
      .get<TechnicianModel[]>
      ('./assets/jsons/technicians.json')
    }

    create(technicien:any):any{
      console.log(technicien);

      // return this.http.post('http://localhost:8080/technician',product)
      let localtechnicians:any=localStorage.getItem("technicians");
      let technicians:TechnicianModel[]=JSON.parse(localtechnicians)
      console.log("technicians");
      console.log(technicians);
      let length=technicians.length;
      technicien.idPiece=(length||1)+1
      technicians.push(technicien)
      localStorage.setItem("technicians",JSON.stringify(technicians))
    }

    getById(id:number) :TechnicianModel{
      // return this.http.get<TechnicianModel>(`http://localhost:8080/technician/${id}`)
      let localtechnicians:any=localStorage.getItem("technicians");
      let technicians:TechnicianModel[]=JSON.parse(localtechnicians)
      return technicians.find(x => x.id == id)||{};
    }

    update(id:number,technician:any):TechnicianModel{
      // return this.http.put<TechnicianModel>(`http://localhost:8080/technician/${id}`,product)
      let localtechnicians:any=localStorage.getItem("technicians");
      let technicians:TechnicianModel[]=JSON.parse(localtechnicians)
      let searchtechnician= technicians.find(x => x.id == id)||{};
      let index=technicians.findIndex(x=>x.id==id);
      technicians[index]=technician;
      localStorage.setItem("technicians",JSON.stringify(technicians))

      return technicians[index];
    }
    delete(id:number):any{
      // return this.http.delete<any>(`http://localhost:8080/technician/${id}`);
      let localtechnicians:any=localStorage.getItem("technicians");
      let technicians:TechnicianModel[]=JSON.parse(localtechnicians)
    let searchtechnicians= technicians.find(x => x.id == id)||{};
    let index=technicians.findIndex(x=>x.id==id);

    if (index !== -1) {
      technicians.splice(index, 1);
    }

    localStorage.setItem("technicians",JSON.stringify(technicians))


    return technicians[index];
    }
}
