import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
})
export class AccessComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
    this.hideTabBar();
  }

  hideTabBar(){
    document.querySelector('ion-tab-bar').style.display= "none";
  }
  access(){
    this._router.navigate(['/home']);
  }
}
