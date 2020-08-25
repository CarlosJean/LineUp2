import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private storage:Storage,private menu:MenuController) {
    this.showTabBar();    
  }

  ngOnInit(){}

  showTabBar(){
    this.menu.enable(false,'first');
    document.querySelector('ion-tab-bar').style.display= "flex";
    /* document.querySelector('ion-menu-button').style.display= "none"; */
    //document.querySelector('ion-tab-bar').style.display= "none";
    this.storage.set('name','Jean Carlos Holguin');    
  }
}
