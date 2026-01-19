import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyCardBoxComponent } from './property-card-box/property-card-box.component';
import { AboutComponent } from './about/about.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplyButtonComponent } from './apply-button/apply-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyCardBoxComponent,
    AboutComponent,
    PropertyDetailsComponent,
    ApplyNowComponent,
    ApplyButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
