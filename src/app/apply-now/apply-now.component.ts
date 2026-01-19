import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PropertyServicesService } from 'src/utils/Services/property-services.service';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css'],

})
export class ApplyNowComponent {
  id: number = 0;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  propertyService: PropertyServicesService = inject(PropertyServicesService);

  constructor(activatedRoute: ActivatedRoute) {
    this.id = Number(activatedRoute.snapshot.params['id']);
  }

  applyFormSubmit(): void {
    this.propertyService.applyForm(this.applyForm.value.firstName ?? "", this.applyForm.value.lastName ?? "", this.applyForm.value.email ?? "")
  }

}
