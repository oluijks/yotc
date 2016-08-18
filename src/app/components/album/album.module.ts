import { NgModule } from '@angular/core';
import { AlbumComponent } from './index';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AlbumComponent],
    imports: [BrowserModule, FormsModule, RouterModule],
    exports: [AlbumComponent]
})
export class AlbumModule {
}
