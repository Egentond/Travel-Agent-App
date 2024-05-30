import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinationService } from '../services/api/destinations/destination.service';
import { SuccessStatusService } from '../services/success-status.service';

@Component({
  selector: 'app-update-destination',
  templateUrl: './update-destination.component.html',
  styleUrls: ['./update-destination.component.css']
})
export class UpdateDestinationComponent {

  

  constructor(
    private destination: DestinationService, 
    private router: Router,
    private setStatus: SuccessStatusService
  ) { }

  destinationForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    averageRating: new FormControl(0)
  });
  
  onSubmit() {
    const name: string = this.destinationForm.value.name;
    this.destination.updateDestination(this.destinationForm.value, name).subscribe({
      next: (data) => {
        console.log(data);
        this.setStatus.setCreatedDest(false);
        this.setStatus.setDeleteDest(false);
        this.setStatus.setUpdateDest(true);
        this.router.navigate(['update/success'])
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Succesfully updated database');
      }
    });
  }

}
