import { Component, OnInit } from '@angular/core';
import { DestinationDataService } from '../services/destination-data.service';
import { PexelService } from '../services/api/pexels/pexel.service';

@Component({
  selector: 'app-display-destination',
  templateUrl: './display-destination.component.html',
  styleUrls: ['./display-destination.component.css']
})
export class DisplayDestinationComponent implements OnInit {

  destination: any;
  photo: any;

  constructor(private dataService: DestinationDataService, private photoService: PexelService) { }

  ngOnInit(): void {
    this.dataService.currentDestination.subscribe({
      next: (data) => {
        this.destination = data;
        if (this.destination && this.destination.city) {
          this.fetchImage();
        }
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Successfully displayed the data');
      }
    });
  }
  private fetchImage() {
    this.photoService.getCityImage(this.destination.city).subscribe({
      next: (data) => {
        if(data.photos && data.photos.length) {
          this.photo = data.photos[0].src.original;
          console.log(this.photo);
        }
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Successfully loaded image');
      }
    });
  }  
  
  

}
