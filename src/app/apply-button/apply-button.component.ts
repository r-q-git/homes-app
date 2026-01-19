import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { PropertyCard } from 'src/utils/Interfaces/property-card';
import { PropertyServicesService } from 'src/utils/Services/property-services.service';

@Component({
  selector: 'app-apply-button',
  templateUrl: './apply-button.component.html',
  styleUrls: ['./apply-button.component.css']
})
export class ApplyButtonComponent {
  @Input() id: number = 0;
  propertyService: PropertyServicesService = inject(PropertyServicesService);
  

  @Output() applyCountOutput = new EventEmitter<number>();

  applyCountOutputFxn() {
    this.propertyService.applyCount++;
    this.applyCountOutput.emit(this.propertyService.applyCount);
  }
}
