import { Routes } from '@angular/router';
import { PropertyCardBoxComponent } from '../../app/property-card-box/property-card-box.component';
import { AboutComponent } from '../../app/about/about.component';
import { PropertyDetailsComponent } from 'src/app/property-details/property-details.component';
import { ApplyNowComponent } from 'src/app/apply-now/apply-now.component';

const routeConfig: Routes = [
  { path: '', component: PropertyCardBoxComponent, title: 'Home Page' },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Page',
  },
  {
    path: 'details/:id',
    component: PropertyDetailsComponent,
    title: 'Detail Page',
  },
  {
    path: "apply-now/:id",
    component: ApplyNowComponent,
    title: "Apply Page"
  }
];

// note : DON'T ADD / IN PATH

export default routeConfig;
