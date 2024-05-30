import { DestinationService } from './../services/api/destinations/destination.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessStatusService } from '../services/success-status.service';

@Component({
  selector: 'app-delete-destination',
  templateUrl: './delete-destination.component.html',
  styleUrls: ['./delete-destination.component.css']
})
export class DeleteDestinationComponent {

  emptyInput: boolean = false;
  noDataFound: boolean = false;

  constructor(
    private router: Router, 
    private destinationService: DestinationService,
    private setStatus: SuccessStatusService
  ) { }

  deleteDestForm = new FormGroup({
    name: new FormControl('')
  });

  onSubmit(): void {

    this.destinationService.deleteDestination(this.deleteDestForm.value.name).subscribe({
      next: (data)  => {
        console.log('Success', data);
        this.setStatus.setCreatedDest(false);
        this.setStatus.setDeleteDest(true);
        this.setStatus.setUpdateDest(false);
        this.router.navigate(['delete/success'], );
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Successfully deleted the destination from database');
      }
    });
  }
}