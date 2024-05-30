import { Component, OnInit } from '@angular/core';
import { SuccessStatusService } from '../services/success-status.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {

  createdDest: boolean = false;
  deletedDest: boolean = false;
  updatedDest: boolean = false;

  constructor(
    private setStatus: SuccessStatusService
  ) { }

  ngOnInit(): void {
    
    this.setStatus.createdDestination.subscribe({
      next: (state) => {
        this.createdDest = state;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Succesfully set create status');
      }
    });

    this.setStatus.deletedDestination.subscribe({
      next: (state) => {
        this.deletedDest = state;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Succesfully set delete status');
      }
    });

    this.setStatus.updatedDestination.subscribe({
      next: (state) => {
        this.deletedDest = state;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Succesfully set update status');
      }
    });
  }  
}
