import { Component, OnInit } from '@angular/core';
import { Beer } from '../beers/models/beers.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.css']
})
export class TapListComponent implements OnInit {
  beers: Beer[];
  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(): void {
    this.beerService.getBeers()
      .subscribe(beers =>  this.beers = beers);
  }

  abvColor(abv: string){
    let abvInt = parseInt(abv);

    if(abvInt < 4){
      return "light-weight";
    } else if (abvInt < 7) {
       return 'social-drinker';
    } else {
      return "alcholic";
    }
  }

  priceColor(price: number) {
    if(price < 4) {
      return "cheapskate"
    } else if (price < 7) {
      return "middle-class";
    } else {
      return "high-rolloer"
    }
  }



}
