import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes }   from '../home/home.routes';
import { AboutRoutes }  from '../about/about.routes';
import { AlbumRoutes }  from '../album/album.routes';
import { ArtistRoutes } from '../artist/artist.routes';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...AboutRoutes,
    ...AlbumRoutes,
    ...ArtistRoutes
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
