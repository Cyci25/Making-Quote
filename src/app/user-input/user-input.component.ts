import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { QuoteServiceService } from '../quote-service.service';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  providers: [QuoteServiceService]
})
export class UserInputComponent implements OnInit {
  quotes: Quote[];
  formQuote = new Quote("", "", "");

  submitted = true;

  onSubmit() {
    this.submitted = true;
    this.quotes.push(this.formQuote);
}

  constructor(quoteServiceService:QuoteServiceService) {
    this.quotes = quoteServiceService.getAllQuotes();
  }

  ngOnInit() {
  }

}
