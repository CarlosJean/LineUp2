import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShiftService } from 'src/app/services/data/shift.service';

@Component({
  selector: 'app-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.scss'],
})
export class ShiftDetailsComponent implements OnInit {

  shift:any;
  componentTitle:string = "Mis turnos";
  constructor(private _activatedRoute:ActivatedRoute, private _shifts:ShiftService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(param=>{
      this.shift = this._shifts.shifts.find(shift => shift.id == param.idTurno);
      console.log(this.shift);
    });
  }

}
