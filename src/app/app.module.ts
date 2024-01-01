import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import HttpClientModule if making HTTP requests
import { HttpClientModule } from '@angular/common/http';

// Import FormsModule, ReactiveFormsModule for forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import your components

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
    ],
   })
export class AppModule { }
