import { NgModule } from '@angular/core';
import { AboutComponent } from './index';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AboutComponent],
  imports: [BrowserModule, RouterModule],
  exports: [AboutComponent]
})
export class AboutModule {
}
