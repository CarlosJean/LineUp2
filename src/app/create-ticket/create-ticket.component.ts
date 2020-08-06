import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../services/data/business.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss'],
})
export class CreateTicketComponent implements OnInit {

  businessId:number;
  business:any;
  constructor(private _activatedRoute:ActivatedRoute, private _businesses:BusinessService, public _alert:AlertController) {}

  ngOnInit() {   
    this._activatedRoute.params.subscribe(param =>{  
      this.business= this.getBusiness(param.id);    
    });
  }

  getBusiness(id:string){
    return this._businesses.business.find(b=> b.id == id);    
  }

  async create(){
    const alert = await this._alert.create({
      header:'Aviso',
      message:`Su turno en ${this.business.name} ha sido reservado.`,
      buttons: ['Ver mis turnos','Ok']
    });

    await alert.present();
  }
}

