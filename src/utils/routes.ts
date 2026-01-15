import { Routes } from "@angular/router";
import { PropertyCardBoxComponent } from "../app/property-card-box/property-card-box.component";
import { AboutComponent } from "../app/about/about.component";

const routeConfig: Routes = [
    { path: "", component: PropertyCardBoxComponent, title: "Home Page" }, {
        path: "about", component: AboutComponent, title: "About Page"
    }];

    // note : DON'T ADD / IN PATH

export default routeConfig;