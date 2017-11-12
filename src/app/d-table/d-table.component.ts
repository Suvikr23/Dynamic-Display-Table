import { Component, OnInit } from '@angular/core';

// importing Services
import { JsonService } from '../_shared/json.service';

import { Company } from '../company';

@Component({
  selector: 'app-d-table',
  templateUrl: './d-table.component.html',
  styleUrls: ['./d-table.component.css'],
  providers:[JsonService]
})
export class DTableComponent implements OnInit {
  jsonData: Company[];
  tableHeadingList: string[] = ['Location', 'Market', 'Website', 'Employees', 'Stage', 'Founders'];
  comDropdownData : string[] = ['Shopsense', 'Clairvolex', 'AhaTaxis'];

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

  // checkDbUpdate() {
  //   this.jsonService.updateCompanyData().subscribe ( res => {
  //     console.log(res);
  //    this.callJson();
  //   });
  // }

  // showCompaniesList(company) {
  //   if(!company) {
  //     company = new Company();
  //     this.isNewData = true;
  //   }
  //   this.newComData = company;
  // }

  addprop1(e) {
    if(e.target.checked) {
      
    }
  }
}