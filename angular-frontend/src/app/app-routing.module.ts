import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateDestinationComponent } from './create-destination/create-destination.component';
import { AppComponent } from './app.component';
import { DisplayDestinationComponent } from './display-destination/display-destination.component';
import { DeleteDestinationComponent } from './delete-destination/delete-destination.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { UpdateDestinationComponent } from './update-destination/update-destination.component';

const routes: Routes = [
  {
    path:'',
    component: IndexComponent
  },
  {
    path: 'search',
    component: IndexComponent
  },
  {
    path: 'display',
    component: DisplayDestinationComponent
  },
  {
    path: 'create',
    component: CreateDestinationComponent
  },
  {
    path: 'create/success',
    component: SuccessPageComponent
  },
  {
    path: 'update',
    component: UpdateDestinationComponent
  },
  {
    path: 'update/success',
    component: SuccessPageComponent
  },
  {
    path: 'delete',
    component: DeleteDestinationComponent
  },
  {
    path: 'delete/success',
    component: SuccessPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
