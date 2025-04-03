import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { EquipmentModel } from 'src/app/services/equipment.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;

  @Input()
  data!: EquipmentModel.Equipment[] | null;

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    if (!this.data) {
      return;
    }

    console.log(this.data);
    const firstPositionHistory = this.data?.[0]?.positionHistory?.[0];

    if (!firstPositionHistory) {
      return;
    }

    this.map = L.map('map').setView(
      [firstPositionHistory.lat, firstPositionHistory.lon],
      10
    );
    const baseMapURl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    L.tileLayer(baseMapURl).addTo(this.map);

    this.data.forEach((equipment) => {
      if (equipment.positionHistory.length > 0) {
        equipment.positionHistory.forEach((position, index) => {
          L.marker([position.lat, position.lon])
            .addTo(this.map)
            .bindPopup(
              `${equipment.modelName}${index === 0 && ' (Posição atual)'}`
            );
        });
      }
    });
  }
}
