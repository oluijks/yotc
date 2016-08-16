import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './index';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, FormsModule, RouterModule],
  exports: [HomeComponent]
})
export class HomeModule {
}
