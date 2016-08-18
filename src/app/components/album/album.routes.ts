import { Routes } from '@angular/router';

import { AlbumComponent } from './album.component';

export const AlbumRoutes: Routes = [
  { path: 'album/:id', component: AlbumComponent }
];
