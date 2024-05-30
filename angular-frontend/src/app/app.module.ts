import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { CreateDestinationComponent } from './create-destination/create-destination.component';
import { DisplayDestinationComponent } from './display-destination/display-destination.component';
import { DeleteDestinationComponent } from './delete-destination/delete-destination.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { UpdateDestinationComponent } from './update-destination/update-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    CreateDestinationComponent,
    DisplayDestinationComponent,
    DeleteDestinationComponent,
    SuccessPageComponent,
    UpdateDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    HttpClient 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
