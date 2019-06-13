
export class Beer {
    constructor(
    public breweryName: string,
    public beerName: string,
    public ABV: string,
    public style: string,
    public price: number,
    public tapNum: number,
    public id: number) {}
    
    public onTap: true
    // kegSize: number = 124;
    pintsLeft: number = 124;
    public bgURL: string = "default";

    sellPint() {
        if (this.pintsLeft > 0) {
            this.pintsLeft -= 1;
        } else {
            // hide sell button              
        }
    }



}