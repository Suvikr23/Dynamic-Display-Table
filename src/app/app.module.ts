import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// im memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CompaniesData } from './companies-data';

import { AppComponent } from './app.component';
import { DTableComponent } from './d-table/d-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DTableComponent
  ],
  imports: [
    InMemoryWebApiModule.forRoot(CompaniesData),
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
