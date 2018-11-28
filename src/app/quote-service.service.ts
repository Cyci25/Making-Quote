import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { Quotes } from './quotes';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {

  constructor() { }

  getAllQuotes(): Quote[] {
    return Quotes;
  }

}
