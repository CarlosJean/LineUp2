import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private storage:Storage) {
    this.showTabBar();
  }

  ngOnInit(){}

  showTabBar(){
    document.querySelector('ion-tab-bar').style.display= "flex";
    //document.querySelector('ion-tab-bar').style.display= "none";
    this.storage.set('name','Jean Carlos Holguin');    
  }
}
