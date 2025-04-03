import { Injectable } from '@angular/core';
import { EquipmentModel as Model } from './equipment.model';
import equipmentJson from '../data/equipment.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  getEquipment(): Observable<Model.Equipment[]> {
    console.log(equipmentJson)
    return of(equipmentJson);
  }
}
