import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  data;
  error: object;
  city: string;
  loading = true;

  constructor(private weather: WeatherDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.city = this.route.snapshot.params.id;
    this.getWeatherData(this.city);
  }

  getWeatherData(city: string): void {
    this.weather.getData(city)
    .subscribe(
      report => this.data = report,
      err => {
        this.error = err;
        this.loading = false;
      },
      () => this.loading = false
      );
  }

}
