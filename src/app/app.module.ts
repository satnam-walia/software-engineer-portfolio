import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule and HttpClient
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslationService } from './translation.service';
import { routes } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes), // Make sure you have defined "routes" correctly
  ],
  providers: [TranslationService], // Add TranslationService to providers
})
export class AppModule { }
