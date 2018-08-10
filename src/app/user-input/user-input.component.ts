import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
//   submitGoal(){
//     this.addQuote.emit(this.newQuote);
// }

  constructor() { }

  ngOnInit() {
  }

}
