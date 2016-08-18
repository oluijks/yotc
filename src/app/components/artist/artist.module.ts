import { NgModule } from '@angular/core';
import { ArtistComponent } from './index';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ArtistComponent],
    imports: [BrowserModule, FormsModule, RouterModule],
    exports: [ArtistComponent]
})
export class ArtistModule {
}
