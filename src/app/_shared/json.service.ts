import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Company } from '../company';

@Injectable()
export class JsonService {

  private baseUrl = 'api/companies';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
  }

  getCompanyData(): Observable<any> {
    return this.http.get(this.baseUrl)
      .map((res: any) => res.json())
      .do(res => console.log(res))
      .catch(this.handleError);

  }

  updateCompanyData(company: Company): Observable<Company> {
    return this.http.post(this.baseUrl, JSON.stringify(company), { headers: this.headers })
      .map((res: any) => res.json().data as Company)
      .do(res => console.log(res))
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log('Error Message:' + error);
    return Observable.throw(error);
  }
  
}

