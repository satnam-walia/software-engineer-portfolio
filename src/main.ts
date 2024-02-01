/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { enableProdMode } from '@angular/core';

import { environment } from './environment';
import { HomeComponent } from './app/homepage/home.component';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(HomeComponent).catch(err => console.error(err));
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
