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
  soldBeer: Beer;
 
  constructor(private beerService: BeerService) { }
 
  ngOnInit() {
    this.getBeers();
  }
 
  getBeers(): void {
    this.beerService.getBeers()
      .subscribe(beers => this.beers = beers);
  }

  sellPint(beer: Beer): void{
    console.log("clicked");
    console.log(beer.pintsLeft);
   this.beerService.getBeer(beer.id).subscribe(beer => this.soldBeer = beer);
   this.soldBeer.pintsLeft--;
   this.beerService.updateBeer(this.soldBeer);
    // this.beerService.updatePintsLeft(beer);
  }

  // save(): void {
  //   this.beerService.updateBeer(this.beer)
  //   .subscribe(() => this.goBack());
  // }

  // getBeer(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.beerService.getBeer(id)
  //     .subscribe(beer => this.beer = beer);
  // }
}