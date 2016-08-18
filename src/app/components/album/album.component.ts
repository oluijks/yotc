import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from '../../shared/services/spotify.service';
import { Album } from '../../shared/models/Album';
import { ActivatedRoute } from '@angular/router';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

declare var ENV: string;

@Component({
    selector: 'as-album',
    pipes: [TruncatePipe],
    templateUrl: 'app/components/album/album.html',
    styleUrls: ['app/components/album/album.css']
})
export class AlbumComponent implements OnInit, OnDestroy {
  /**
   *
   *
   * @type {string}
   */
  id: string;

  /**
   *
   *
   * @type {Album[]}
   */
  album: Album[];

  /**
   *
   *
   * @type {string}
   */
  public errorMessage: string;

  /**
   *
   *
   * @type {*}
   */
  sub: any;

  /**
   * Creates an instance of AlbumComponent.
   *
   * @param {SpotifyService} _spotifyService
   * @param {ActivatedRoute} _route
   */
  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ) {}

  /**
   * initialize.
   */
  ngOnInit() {
    if (ENV !== 'production') {
      console.log('Album component initialized.');
    }

    // Get the artist information from the Spotify Service.
    this.sub = this._route.params
      .map(params => params['id'])
      .subscribe((id: any) => {
      this._spotifyService.getAlbum(id)
        .subscribe(
          album => {
            this.album = album;
        },
        error => { this.errorMessage = <any>error; console.error(this.errorMessage); }
      );
    });
  }

  /**
   * Clean up.
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Convert ms to ms.
   *
   * @param {number} millis
   * @returns
   */
  millisToMinutesAndSeconds(millis: number) {
    let minutes: number = Math.floor(millis / 60000);
    let seconds: any = ((millis % 60000) / 1000).toFixed(0);

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}
