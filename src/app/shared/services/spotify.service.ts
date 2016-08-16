import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  /**
   * Base URL for the Spotify API.
   *
   * @private
   * @type {string}
   */
  private _apiBaseUrl: string = 'https://api.spotify.com/v1/';

  /**
   * Query string.
   *
   * @private
   * @type {string}
   */
  private _query: string;

  /**
   * Market (language).
   *
   * @private
   * @type {string}
   */
  private _market: string = 'US';

  constructor(private _http: Http) {
  }

  /**
   * Make a search on the Spotify API.
   *
   * @param {string} searchTerm
   * @param {string} [type='artist']
   * @returns
   */
  searchSpotify(searchTerm: string, type = 'artist', offset = 0, limit = 10) {
    if (type === '') { type = 'artist'; }

    this._query = `${this._apiBaseUrl}search?query=${searchTerm}&offset=${offset}&limit=${limit}&type=${type}&market=${this._market}`;

    return this._returnResponse(this._query);
  }

  /**
   * Get the artist information from Spotify.
   *
   * @param {string} id
   * @param {string} [type='artist']
   * @returns
   */
  getArtist(id: string) {
    this._query = `${this._apiBaseUrl}artists/${id}`;

    return this._returnResponse(this._query);
  }

  /**
   * Get the artist albums information from Spotify.
   *
   * @param {string} artistId
   * @returns
   */
  getAlbums(artistId: string) {
    this._query = `${this._apiBaseUrl}artists/${artistId}/albums`;

    return this._returnResponse(this._query);
  }

  getAlbum(albumId: string) {
    this._query = `${this._apiBaseUrl}albums/${albumId}`;

    return this._returnResponse(this._query);
  }

  _returnResponse(query: string) {
    return this._http.get(query).map(response => response.json());
  }
}
