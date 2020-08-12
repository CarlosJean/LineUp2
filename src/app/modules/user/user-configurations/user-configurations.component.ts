import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-configurations',
  templateUrl: './user-configurations.component.html',
  styleUrls: ['./user-configurations.component.scss'],
})
export class UserConfigurationsComponent implements OnInit {

  constructor(private _alert:AlertController) { }

  ngOnInit() {}

  async sendRecuperationEmail(){
    const alert = await this._alert.create({
      header:'Aviso',
      message:`Se ha enviado el enlace de recuperación de contraseña a su correo.`,
      buttons: ['Ok']
    });

    await alert.present();
  }

}
