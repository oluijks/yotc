import { Component } from '@angular/core';

import { SpotifyService } from '../shared/services/spotify.service';
import { AudioScrobblerService } from '../shared/services/audioscrobbler.service';
import { Artist } from '../shared/models/Artist';
import { ArtistInfo } from '../shared/models/ArtistInfo';
import { Album } from '../shared/models/Album';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'as-artist',
    templateUrl: 'app/artist/artist.html',
    styleUrls: ['app/artist/artist.css']
})
export class ArtistComponent {
  id: string;
  artist: Artist[];
  albums: Album[];
  artistInfo: ArtistInfo[];

  constructor(
    private _spotifyService: SpotifyService,
    private _audioScrobblerService: AudioScrobblerService,
    private _route: ActivatedRoute
  ) {}

  /**
   * Get the artist information from the Spotify Service.
   */
  ngOnInit() {
    console.log('Artist component initialized');

    this._route.params
      .map(params => params['id'])
      .subscribe((id: any) => {
      this._spotifyService.getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
        // Get artist bio from Last.fm
        this._getArtistInfo(artist.name);
      });
      this._getAlbums(id);
    });

  }

  /**
   * Fetch artist information from Last.fm
   *
   * @param {string} artistName
   */
  _getArtistInfo(artistName: string) {
    this._audioScrobblerService.getArtistInfo(artistName)
    .subscribe(artistInfo => {
      this.artistInfo = artistInfo.artist.bio.summary;
      // console.debug(artistInfo);
    });
  }

  _getAlbums(albumId: string) {
    this._spotifyService.getAlbums(albumId)
      .subscribe(albums => {
        this.albums = albums.items;
    });
  }
}
