import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @Input() menuOpen:boolean;
  constructor(private menu:MenuController) {
    
    
   }

  ngOnInit() { 
    console.log(this.menuOpen);
    if(this.menuOpen){
      this.menu.open();
    }
  }
}
