import { Component, OnInit } from '@angular/core';
import { ShiftService } from '../../../services/data/shift.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shifts-list',
  templateUrl: './shifts-list.component.html',
  styleUrls: ['./shifts-list.component.scss'],
})
export class ShiftsListComponent implements OnInit {

  screenTitle = 'Mis turnos';
  shifts:Array<any>;

  constructor(private _shifts:ShiftService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(param=>{
      this.shifts = this._shifts.shifts.filter(shift => shift.userId == param.userId);
    });
  }
  
}
