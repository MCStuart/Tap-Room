import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './beers/beers.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BeerDetailComponent }  from './beer-detail/beer-detail.component';
import { TapListComponent } from './tap-list/tap-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'beers', component: BeersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: BeerDetailComponent },
  { path: 'tap-list', component: TapListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
