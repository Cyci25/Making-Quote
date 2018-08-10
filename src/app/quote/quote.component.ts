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

  constructor() { }

  ngOnInit() {
  }

}
 