import { FormControl, FormGroup } from '@angular/forms';
import { DestinationService } from './../services/api/destinations/destination.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationDataService } from '../services/destination-data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  emptyInput: boolean = false;
  noDataFound: boolean = false;

  constructor(
    private destination: DestinationService, 
    private router: Router, 
    private destinationData: DestinationDataService
  ) { }

  destinationForm = new FormGroup({
    city: new FormControl('')
  });

  onSubmit(): void {
    
    this.destination.getDestinationByName(this.destinationForm.value.city).subscribe({
      next: (data) => {
        console.log(data);
        this.destinationData.updateDestinationData(data);
        this.router.navigate(['display']);
      },
      error: (error) => {
        if(!this.destinationForm.value.city){
          this.emptyInput = true;
          this.noDataFound = false;
        }
        else {
          this.emptyInput = false;
          this.noDataFound = true;
        }
        console.error(error);
      },
      complete: () => {
        console.log('Succesfully fetched data from database');
      }
    });
  }

}
