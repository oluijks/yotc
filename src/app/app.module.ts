import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';

import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';

import { HTTP_PROVIDERS } from '@angular/http';
import { SpotifyService } from './shared/services/spotify.service';
import { AudioScrobblerService } from './shared/services/audioscrobbler.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NavbarModule,
    HomeModule,
    AboutModule,
    ArtistModule,
    AlbumModule,
    routing
  ],
  providers: [HTTP_PROVIDERS, APP_PROVIDERS, appRoutingProviders, SpotifyService, AudioScrobblerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
