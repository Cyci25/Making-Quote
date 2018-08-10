import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { TimeSincePipe } from './time-since.pipe';
import { InputComponent } from './input/input.component';
import { UserInputComponent } from './user-input/user-input.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    TimeSincePipe,
    InputComponent,
    UserInputComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
