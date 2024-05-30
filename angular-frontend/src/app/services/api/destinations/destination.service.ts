import { CreateDestinationComponent } from './../../../create-destination/create-destination.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private baseURL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getDestinationByName(city: string): Observable<any> {
    const destinationURL = `${this.baseURL}destinations/${city}`;  // Fixed to correctly use template literals
    if(city){
      return this.http.get<any>(destinationURL, { params: {city} });  // Pass the HttpParams object as part of the options
    }
    else {
      return this.http.get<any>(this.baseURL, { params: {city} });  // Pass the HttpParams object as part of the options
    }
  }

  createDestination(destination: any): Observable<any> {
    const destinationURL = `${this.baseURL}destinations`;
    return this.http.post(destinationURL, destination);
  }

  //TODO
  updateDestination(destination: any, cityName: string): Observable<any> {
    const destinationURL = `${this.baseURL}destinations/${cityName}`;
    return this.http.put(destinationURL, destination);
  }

  //TODO
  deleteDestination(name: any): Observable<any> {
    const destinationURL = `${this.baseURL}destinations/${name}`;
    return this.http.delete(destinationURL, {params: {name}});
  }
}
