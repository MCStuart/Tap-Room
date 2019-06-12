export class Beer {
    constructor(
    public breweryName: string,
    public beerName: string,
    public ABV: string,
    public style: string,
    public price: number,
    public tapNum: number) {}
    
    kegSize: number = 124;
    pintsLeft: number = this.kegSize;
    public bgURL: string = "default";

    sellPint() {}
    sellGrowler() {}
    sellLargeGrowler() {}
}