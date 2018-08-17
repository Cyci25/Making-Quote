import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { QuoteServiceService } from '../quote-service.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  providers: [QuoteServiceService]
})
export class UserInputComponent implements OnInit {
  quotes: Quote[];
  formQuote = new Quote(0,"", "", "", new Date() );

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.quotes.push(this.formQuote);
}
deleteQuote(isComplete, index){
  if (isComplete){
    const toDelete = confirm('Do you want to delete this Quote?');
    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }
}

  constructor(quoteServiceService:QuoteServiceService) {
    this.quotes = quoteServiceService.getAllQuotes();
  }

  ngOnInit() {
  }

}
