import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationDataService {

  private destinationSource = new BehaviorSubject<any>(null);
  currentDestination = this.destinationSource.asObservable();

  constructor() { }

  updateDestinationData(data: any) {
    	this.destinationSource.next(data);
  }
}
