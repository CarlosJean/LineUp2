import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit {

  headerTitle:string;
  constructor() { }

  ngOnInit() {
    this.headerTitle = "Datos de usuario";
  }

}
