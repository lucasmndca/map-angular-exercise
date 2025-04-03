export namespace EquipmentModel {
  export interface Position {
    equipmentId: string;
    date: string;
    lat: number;
    lon: number;
  }

  export interface Equipment {
    id: string;
    equipmentModelId: string;
    modelName: string;
    name: string;
    positionHistory: Position[];
  }
}
