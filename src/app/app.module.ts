import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PaddleModule } from 'paddle';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PaddleModule.forRoot({ sandbox: !environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
