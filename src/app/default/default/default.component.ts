import { Component, OnInit } from '@angular/core';
import { faStore,faBoxesStacked } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  faStore=faStore
  faBoxesStacked=faBoxesStacked
  constructor() { }

  ngOnInit(): void {
  }

}
