import { Injectable } from '@angular/core';
import { EquipmentModel as Model } from './equipment.model';
import { Observable, of } from 'rxjs';

import equipmentJson from '../data/equipment.json';
import equipmentModel from '../data/equipmentModel.json';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  getEquipment(): Observable<Model.Equipment[]> {
    return of(
      equipmentJson.map((equipment) => ({
        ...equipment,
        modelName:
          equipmentModel?.find(
            (model) => model.id === equipment.equipmentModelId
          )?.name ?? 'Modelo não encontrado',
      }))
    );
  }
}
