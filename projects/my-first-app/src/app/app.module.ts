import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { Chap3Component, InfoBlurb, TodaysDate } from './app.component';

@NgModule({
  declarations: [
    Chap3Component,
    InfoBlurb,
    TodaysDate
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [Chap3Component, InfoBlurb, TodaysDate]
})
export class AppModule { }
