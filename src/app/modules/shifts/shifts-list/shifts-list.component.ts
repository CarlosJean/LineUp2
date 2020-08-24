import { Component, OnInit } from '@angular/core';
import { ShiftService } from '../../../services/data/shift.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shifts-list',
  templateUrl: './shifts-list.component.html',
  styleUrls: ['./shifts-list.component.scss'],
})
export class ShiftsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
}
