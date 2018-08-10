import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { TimeSincePipe } from './time-since.pipe';

import { UserInputComponent } from './user-input/user-input.component';
import { AvatarComponent } from './avatar/avatar.component';
import { InputDetailsComponent } from './input-details/input-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    TimeSincePipe,

    UserInputComponent,
    AvatarComponent,
    InputDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
