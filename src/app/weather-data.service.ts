import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  log(message: string) {
    console.log(message);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      // return of(result as T);

      throw error; // throwing error
    };
  }

  getData(city: string): Observable<any> {
    console.log('hitting service');
    let url: string;
    if (city.toUpperCase() === 'TORONTO') {
      url = 'https://www.theweathernetwork.com/api/obsdata/caon0696/c?ref=rt';
    } else if (city.toUpperCase() === 'MONTREAL') {
      url = 'https://www.meteomedia.com/api/obsdata/caqc0363/c?ref=rt';
    } else {
      url = 'https://www.meteomedia.com/api/obsdata/caqc0363/c?ref=rt';
    }
    return this.http.get(url)
      .pipe(
        tap(result => this.log('Success! Fetching all the data.')),
        catchError(this.handleError('getData Service', []))
      );
  }



}
