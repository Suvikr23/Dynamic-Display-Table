import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Company } from './company';

export class CompaniesData implements InMemoryDbService {

    createDb() {
        let companies : Company[] = [
            {
                "id": 1,
                "name": "Flipkart",
                "description": "Flipkart is an online shopping destination for electronics, books, music, and movies",
                "location": "Bengaluru",
                "website": "www.flipkart.com",
                "market": ["e-commerce", "fashion", "data as a service"],
                "employees": 1000,
                "stage": "Pre Series A",
                "founders": ["Sachin Bansal", "Binny Bansal"]
            }
        ];
        return {companies}
    }    
}