import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { AboutRoutes } from './about/index';
import { ArtistRoutes } from './artist/index';
import { AlbumRoutes } from './album/index';

const appRoutes: Routes = [
    ...AboutRoutes,
    ...HomeRoutes,
    ...ArtistRoutes,
    ...AlbumRoutes
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
