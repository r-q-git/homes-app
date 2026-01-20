import { Component, Input } from '@angular/core';
import { PropertyCard } from '../../utils/Interfaces/property-card';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent {
  isLiked : boolean = false;
  @Input() propertyCard: PropertyCard = {
    id: -1,
    name: "",
    city: "",
    state: "",
    photo: "",
    availableUnits: -1,
    wifi: false,
    laundry: false
  };

  // other way to write when we don't want to pass the value.
  // @Input() propertyCard!: PropertyCard;

  handleLike(){
    this.isLiked = !this.isLiked;
  }


}
