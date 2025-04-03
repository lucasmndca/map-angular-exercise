import { Injectable } from '@angular/core';
import { EquipmentModel as Model } from './equipment.model';
import { Observable, of } from 'rxjs';

import equipmentJson from '../data/equipment.json';
import equipmentModel from '../data/equipmentModel.json';
import equipmentPositionHistory from '../data/equipmentPositionHistory.json';

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

  private getPositionHistory(equipmentId: string): Model.Position[] {
    const positionHistory = equipmentPositionHistory.filter(
      (history) => history.equipmentId === equipmentId
    );

    if (!positionHistory || positionHistory?.length === 0) return [];

    return positionHistory;
  }

  getEquipment(): Observable<Model.Equipment[]> {
    return of(
      equipmentJson.map((equipment) => ({
        ...equipment,
        modelName: this.getModelName(equipment.equipmentModelId),
        positionHistory: this.getPositionHistory(equipment.id),
      }))
    );
  }
}
