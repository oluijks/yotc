import { Component, OnInit, OnDestroy } from '@angular/core';

import { SpotifyService } from '../../shared/services/spotify.service';
import { AudioScrobblerService } from '../../shared/services/audioscrobbler.service';
import { Artist } from '../../shared/models/Artist';
import { ArtistInfo } from '../../shared/models/ArtistInfo';
import { Album } from '../../shared/models/Album';
import { ActivatedRoute } from '@angular/router';

declare var ENV: string;

@Component({
    selector: 'as-artist',
    templateUrl: 'app/components/artist/artist.html',
    styleUrls: ['app/components/artist/artist.css']
})
export class ArtistComponent implements OnInit, OnDestroy {
  /**
   *
   *
   * @type {string}
   */
  id: string;

  /**
   *
   *
   * @type {Artist[]}
   */
  artist: Artist[];

  /**
   *
   *
   * @type {Album[]}
   */
  albums: Album[];

  /**
   *
   *
   * @type {ArtistInfo[]}
   */
  artistInfo: ArtistInfo[];

  /**
   *
   *
   * @type {*}
   */
  sub: any;

  /**
   * Creates an instance of ArtistComponent.
   *
   * @param {SpotifyService} _spotifyService
   * @param {AudioScrobblerService} _audioScrobblerService
   * @param {ActivatedRoute} _route
   */
  constructor(
    private _spotifyService: SpotifyService,
    private _audioScrobblerService: AudioScrobblerService,
    private _route: ActivatedRoute
  ) {}

  /**
   * initialize.
   */
  ngOnInit() {
    if (ENV !== 'production') {
      console.log('Artist component initialized.');
    }

    // Get the artist information from the Spotify Service.
    this.sub = this._route.params
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
   * Clean up.
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
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

  /**
   * Get the albums for a given artist.
   *
   * @param {string} albumId
   */
  _getAlbums(albumId: string) {
    this._spotifyService.getAlbums(albumId)
      .subscribe(albums => {
        this.albums = albums.items;
    });
  }
}
