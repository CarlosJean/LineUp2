import { Component, OnInit } from '@angular/core';
import { ShiftService } from 'src/app/services/data/shift.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-shifts',
  templateUrl: './customer-shifts.component.html',
  styleUrls: ['./customer-shifts.component.scss'],
})
export class CustomerShiftsComponent implements OnInit {

  screenTitle = 'Mis turnos';
  shifts:Array<any>;

  constructor(private _shifts:ShiftService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(param=>{
      this.shifts = this._shifts.shifts.filter(shift => shift.userId == 1/* param.userId */);
    });
  }
}
