import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './beers/beers.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BeerDetailComponent }  from './beer-detail/beer-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'beers', component: BeersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: BeerDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
