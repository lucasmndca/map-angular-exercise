import { Component, OnInit } from '@angular/core';
import { EquipmentService } from './services/equipment.service';
import { Observable } from 'rxjs';
import { EquipmentModel } from './services/equipment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  equipment$!: Observable<EquipmentModel.Equipment[]>;

  constructor(private equipmentService: EquipmentService) {}

  ngOnInit(): void {
    this.equipment$ = this.equipmentService.getEquipment();
  }
}
