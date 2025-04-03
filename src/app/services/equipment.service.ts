import { Injectable } from '@angular/core';
import { EquipmentModel as Model } from './equipment.model';
import { Observable, of } from 'rxjs';

import equipmentJson from '../data/equipment.json';
import equipmentModel from '../data/equipmentModel.json';
import equipmentState from '../data/equipmentState.json';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  private getModelName(equipmentModelId: string) {
    return (
      equipmentModel?.find((model) => model.id === equipmentModelId)?.name ??
      'Modelo não encontrado'
    );
  }

  private getEquipmentState(equipmentModelId: string) {
    const model = equipmentModel?.find(
      (model) => model.id === equipmentModelId
    );

    if (!model) {
      return null;
    }

    const lastStateId = model?.hourlyEarnings?.[0]?.equipmentStateId;
    const stateObj = equipmentState?.find((state) => state.id === lastStateId);

    return stateObj ?? null;
  }

  getEquipment(): Observable<Model.Equipment[]> {
    return of(
      equipmentJson.map((equipment) => ({
        ...equipment,
        modelName: this.getModelName(equipment.equipmentModelId),
        state: this.getEquipmentState(equipment.equipmentModelId),
      }))
    );
  }
}
