import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

const routes: Routes = [
  {
    path: 'app/weather/:id',
    component: WeatherDetailsComponent,
    data: {title: 'weather'}
   },
   {
    path: 'app/weather',
    component: WeatherComponent,
    data: {title: 'weather'}
   },
   {
    path: 'app/gallery',
    component: GalleryComponent,
    data: {title: 'weather'}
   },
   {
     path: 'app/contact',
     component: ContactComponent,
     data: {title: 'Customers'}
   },
   { path: '',
    redirectTo: 'app/weather',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
