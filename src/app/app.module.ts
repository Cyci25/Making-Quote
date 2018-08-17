import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TimeSincePipe } from './time-since.pipe';
import { UserInputComponent } from './user-input/user-input.component';

import { QuoteServiceService } from './quote-service.service';
import { LikesComponent } from './likes/likes.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeSincePipe,
    UserInputComponent,
    LikesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [QuoteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
