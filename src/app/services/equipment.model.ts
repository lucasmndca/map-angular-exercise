export namespace EquipmentModel {
  export interface Equipment {
    id: string;
    equipmentModelId: string;
    modelName: string;
    name: string;
    state: { name: string; color: string } | null;
  }
}
