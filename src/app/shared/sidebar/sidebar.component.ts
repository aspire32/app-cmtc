import { TokenStorageService } from './../../modules/services/token-storage-service.service';
import { Component, OnInit } from '@angular/core';
import { faStore,faBoxesStacked } from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faStore=faStore
  faBoxesStacked=faBoxesStacked
  constructor(private token:TokenStorageService) { }
  role:any
  ngOnInit(): void {
    this.role=this.token.getUser().roles[0].name;
    console.log(this.role);

  }

}
