import { Routes } from '@angular/router';

import { ArtistComponent } from './artist.component';

export const ArtistRoutes: Routes = [
  { path: 'artist/:id', component: ArtistComponent }
];
