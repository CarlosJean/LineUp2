import { Component, OnInit } from '@angular/core';
import { ShiftService } from '../services/data/shift.service';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../services/data/business.service';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss'],
})
export class ShiftsComponent implements OnInit {

  screenTitle = 'Mis turnos';
  shifts:Array<any>;

  constructor(private _shifts:ShiftService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(param=>{
     this.shifts = this._shifts.shifts.filter(shift => shift.userId == param.userId);
    });
  }

}
