import { Injectable } from '@angular/core';
import { BusinessService } from './business.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  shifts:Array<any>;
  constructor(private _business:BusinessService) {
    const date = new Date();
    const timestamp = date.getTime();
    this.shifts = [
      {id:1,businessId:1, userId:1, ticketNumber:'A51', generationDate: timestamp,business:this._business.business.find(business=>business.id == 1)},
      {id:2,businessId:2, userId:1, ticketNumber:'A17', generationDate: timestamp,business:this._business.business.find(business=>business.id == 2)},
      {id:3,businessId:1, userId:2, ticketNumber:'A62', generationDate: timestamp,business:this._business.business.find(business=>business.id == 3)},
    ];    
   }
}
