import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuccessStatusService {

  private createdDestSource = new BehaviorSubject<boolean>(false);
  private deletedDestSource = new BehaviorSubject<boolean>(false);
  private updatedDestSource = new BehaviorSubject<boolean>(false);

  constructor() { }

  createdDestination = this.createdDestSource.asObservable();
  deletedDestination = this.deletedDestSource.asObservable();
  updatedDestination = this.deletedDestSource.asObservable();

  setCreatedDest(state: boolean): void {
    this.createdDestSource.next(state);
  }

  setDeleteDest(state: boolean): void {
    this.deletedDestSource.next(state);
  }

  setUpdateDest(state: boolean): void {
    this.updatedDestSource.next(state);
  }
}
