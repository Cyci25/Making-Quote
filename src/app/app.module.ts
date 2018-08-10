import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { TimeSincePipe } from './time-since.pipe';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    TimeSincePipe,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
