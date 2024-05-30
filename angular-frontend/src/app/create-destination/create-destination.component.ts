import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DestinationService } from '../services/api/destinations/destination.service';
import { Router } from '@angular/router';
import { SuccessStatusService } from '../services/success-status.service';


@Component({
  selector: 'app-create-destination',
  templateUrl: './create-destination.component.html',
  styleUrls: ['./create-destination.component.css']
})
export class CreateDestinationComponent {
  
  destinationForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    averageRating: new FormControl(0)
  });
    
  constructor(
    private destination: DestinationService, 
    private router: Router,
    private setStatus: SuccessStatusService
  ) {}

  onSubmit(): void {
    this.destination.createDestination(this.destinationForm.value).subscribe({
      next: (data) => {
        console.log('Success: ', data);
        this.setStatus.setCreatedDest(true);
        this.setStatus.setDeleteDest(false);
        this.setStatus.setUpdateDest(false);
        this.router.navigate(['create/success']);
      },
      error: (error) => {
        console.error('Error: ',error);
      },
      complete: () => {
        console.log('Succesfully added data to database');
      }
    })
  }
}

