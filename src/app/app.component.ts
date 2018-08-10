import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes'; 

onSubmit  (f: NgForm){
  let content =f.value.content;
  let title = f.value.title;
  title.push({
    'title':title,
    'content': content
  })

}
} 