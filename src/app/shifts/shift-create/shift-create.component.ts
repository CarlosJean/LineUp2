import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessService } from 'src/app/services/data/business.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-shift-create',
  templateUrl: './shift-create.component.html',
  styleUrls: ['./shift-create.component.scss'],
})
export class ShiftCreateComponent implements OnInit {

  businessId:number;
  business:any;
  constructor(private router:Router,private _activatedRoute:ActivatedRoute, private _businesses:BusinessService, public _alert:AlertController) {}

  ngOnInit() {   

    /* let paramId = this._activatedRoute.snapshot.params.id;
    console.log('Param ID: '+paramId); 
    this.business = this.getBusiness(paramId);
    console.log(this.business); */
    this._activatedRoute.params.subscribe(param =>{ 
      this.business= this.getBusiness(param.id);    
      console.log = this.business;
    });
  }

  getBusiness(id:string){
    return this._businesses.business.find(b=> b.id == id);    
  }

  async createTicket(){
    const alert = await this._alert.create({
      header:'Aviso',
      message:`Su turno en ${this.business.name} ha sido reservado.`,
      buttons: [{text:'Ver mis turnos'/* ,handler:()=>{this.goToShiftsComponent() }*/},
      'Ok']
    });

    await alert.present();
  }

  goToShiftsComponent(){
    this.router.navigate(['/shifts/1']);
  }

}
