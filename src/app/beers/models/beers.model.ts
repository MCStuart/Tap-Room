export class Beer {
    onTap: boolean;
    breweryName: string;
    beerName: string;
    ABV: string;
    style: string;
    price: number;
    kegSize: number = 124;
    pintsLeft: number = this.kegSize;
    bgURL: string;


    sellPint() {}
    sellGrowler() {}
    sellLargeGrowler() {}

}