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

  getBeers(): void {
    this.beerService.getBeers()
      .subscribe(beers => this.beers = beers);
  }

  ngOnInit() {
    this.getBeers();
  }

  add(breweryName: string, beerName: string, ABV: string, style: string, price: number): void {
    breweryName = breweryName.trim();
    beerName = beerName.trim();
    ABV = ABV.trim();
    style = style.trim();
    if (!breweryName) { return; }
    if (!beerName) { return; }
    if (!ABV) { return; }
    if (!style) { return; }
    if (!price) { return; }
    this.beerService.addBeer({ breweryName, beerName, ABV, style, price } as Beer)
      .subscribe(beer => {
        this.beers.push(beer);
      });
  }

}
