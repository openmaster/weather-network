import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  data;
  loading = true;
  error;
  selectedImg;

  constructor(private weather: WeatherDataService) { }

  ngOnInit() {
    this.loading = true;
    this.getPhotos();
  }
  getPhotos() {
    this.weather.getPhotos()
    .subscribe(
      photos => this.data = photos,
      err => {
        this.error = err;
        this.loading = false;
      },
      () => this.loading = false
    );
  }
  imageDetail(photo: string) {
    console.log('hitting');
    this.selectedImg = photo;
  }
  closeImg() {
    this.selectedImg = null;
  }

}
