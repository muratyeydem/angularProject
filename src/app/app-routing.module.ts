import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrewDetailComponent } from './crew-detail/crew-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crew/:id', component: CrewDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
