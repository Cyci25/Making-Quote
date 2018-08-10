import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  Quotes=[
    new Quote('Cynthia Joel','Sometimes Cows do Fly', 'Cynthia', new Date(2018,6,20) ),
    new Quote('Cynthia Joel','Sometimes Cows do Fly', 'Cynthia', new Date(2018,6,20) ),
    new Quote('Cynthia Joel','Sometimes Cows do Fly', 'Cynthia', new Date(2018,6,20) )
  ]
  addNewQuote(quote){
    let quoteLength = this.Quotes.length;
    this.Quotes.push(quote)
  }
  

  deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete Quote?`)
        
        if(toDelete){
            this.Quotes.splice(index,1)
        }
    }
}

  constructor() { }

  ngOnInit() {
  }

}
 