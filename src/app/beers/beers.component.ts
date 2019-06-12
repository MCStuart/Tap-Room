import { Component, OnInit } from '@angular/core';
import { Beer } from './models/beers.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  constructor( private beerService: BeerService) { }
  
  beers: Beer[];

  selectedBeer: Beer;
  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
    console.log(this.selectedBeer.beerName);
  }

  getBeers(): void {
    this.beers = this.beerService.getBeers();
  }

  ngOnInit() {
    this.getBeers();
  }

}
