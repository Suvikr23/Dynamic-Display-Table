import { Component, OnInit } from '@angular/core';

// importing Services
import { JsonService } from '../_shared/json.service';

// calling objects
import { Company } from '../company';

// Data to be inserted into DB
const dropDownData : Company[] = [
  {
    "id": 2,
    "name": "Shopsense",
    "description": "Shopsense is an online shopping destination for electronics, books, music, and movies",
    "location": "Mumbai",
    "website": "www.shopsense.co",
    "market": ["e-commerce", "B2C", "Internet of things", "Retail", "Fashion"],
    "employees": 41,
    "stage": "Pre Series A",
    "founders": ["Ravi Gupta", "Binny Bansal"]
  },
  {
    "id": 3,
    "name": "Clairvolex",
    "description": "Clairvolex is an intellectual property solutions for electronics, books, music, and movies",
    "location": "Gurgaon",
    "website": "www.clairvolex.com",
    "market": ["B2B", "Legal"],
    "employees": 97,
    "stage": "Series A",
    "founders": ["Ravi Gupta", "Binny Bansal"]
  },
  {
    "id": 4,
    "name": "Urban Clap",
    "description": "Mobile first open marketplace for electronics, books, music, and movies",
    "location": "Delhi",
    "website": "www.ubanclap.com",
    "market": ["Consumer Services", "E-Commerce", "Marketplace", "Local Services"],
    "employees": 188,
    "stage": "Series B",
    "founders": ["Ravi Gupta", "Binny Bansal"]
  }
];

@Component({
  selector: 'app-d-table',
  templateUrl: './d-table.component.html',
  styleUrls: ['./d-table.component.css'],
  providers:[JsonService]
})
export class DTableComponent implements OnInit {
  jsonData: Company[];
  tableHeadingList: string[] = ['Location', 'Market', 'Website', 'Employees', 'Stage', 'Founders'];
  comDropdownData : string[] = ['Shopsense', 'Clairvolex', 'Urban Clap'];
  dropDataCopy = dropDownData;

  constructor(private jsonService: JsonService) { 
    this.callJson();
  }

  ngOnInit() {
  }

  callJson() {
    this.jsonService.getCompanyData().subscribe(data => {
      this.jsonData = data;
    });
  }

  addProperty(event, index) {
    if(event.target.checked) {
      alert(this.comDropdownData[index]+" is been added");
      this.jsonService.updateCompanyData(this.dropDataCopy[index]).subscribe ( res => {
        this.dropDataCopy.splice(index, 1);
        this.comDropdownData.splice(index, 1);
        this.callJson();
        });
    }
  }
}