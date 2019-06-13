import { Component, OnInit } from '@angular/core';
import { Beer } from '../beers/models/beers.model';
import { BeerService } from '../beer.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  beers: Beer[] = [];
 
  constructor(private beerService: BeerService) { }
 
  ngOnInit() {
    this.getBeers();
  }
 
  getBeers(): void {
    this.beerService.getBeers()
      .subscribe(beers => this.beers = beers.slice(0));
  }
}