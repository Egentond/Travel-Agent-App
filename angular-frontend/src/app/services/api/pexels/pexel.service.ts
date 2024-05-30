import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PexelService {
  private apiUrl = 'https://api.pexels.com/v1/search';
  private apiKey = 'Np6xVdHPrinY1rhngLnip9YJfiZsLwhc2epYqQqVhrrYRlSc6FVMFMPH';  

  constructor(private http: HttpClient) { }

  public getCityImage(city: string): Observable<any> {
    const options = {
      headers: {
        Authorization: this.apiKey
      },
      params: {
        query: city,
        page: 5,
        per_page: 1
      }
    };
    return this.http.get(this.apiUrl, options);
  }
}