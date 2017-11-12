export class Company {
    'id': number;
    'name': string;
    'description': string;
    "location": string;
    "website": string;
    "market": string[];
    "employees": number;
    "stage": string;
    "founders": string[];

    constructor() {
        this.name = "";
        this.description="";
        this.location="";
        this.website="";
        this.market=[''];
        this.employees= 0;
        this.stage= "";
        this.founders= [''];
    }
}