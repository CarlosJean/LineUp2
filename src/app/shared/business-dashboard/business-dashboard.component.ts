import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-dashboard',
  templateUrl: './business-dashboard.component.html',
  styleUrls: ['./business-dashboard.component.scss'],
})
export class BusinessDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.hideTabBar();
  }

  hideTabBar(){
    document.querySelector('ion-tab-bar').style.display= "none";
  }
}
