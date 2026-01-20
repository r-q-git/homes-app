import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyCard } from 'src/utils/Interfaces/property-card';
import { PropertyServicesService } from 'src/utils/Services/property-services.service';



@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent {
  protected id: number = 0;
  countApply: number = 0;
  protected propertyCard: PropertyCard | undefined;

  protected activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  propertyService: PropertyServicesService = inject(PropertyServicesService);
  constructor() {
    // console.log(this.activatedRoute.snapshot.params); // params is an object.
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.propertyCard = this.propertyService.getPropertyById(this.id);
  }

  applyCountOutputEventHandler(count: number) {
    console.log(count);
    this.propertyService.applyCountForPropertyDetails = count;
  }
}
