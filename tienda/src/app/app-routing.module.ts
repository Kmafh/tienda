import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StoreArtComponent } from './pages/store-art/store-art.component';
import { ArtworkComponent } from './pages/store-art/artwork/artwork.component';
import { MarketComponent } from './pages/market/market.component';
import { PromarketseeComponent } from './components/promarketsee/promarketsee.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ArtworkUpdateComponent } from './pages/store-art/artwork-update/artwork-update.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent,data:{title:'Dashboard'} },
      

    ],
  },
  {
    path: 'profile',
    component: PagesComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', component: ProfileComponent,data:{title:'Perfil'} },
      

    ],
  },
  {
    path: 'store',
    component: PagesComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', component: StoreArtComponent,data:{title:'Almacen'} },
      { path: 'artwork', component: ArtworkComponent,data:{title:'Nueva obra',subTitle:'Almacen',url:'store'} },
      { path: 'artworkupd/:id', component: ArtworkUpdateComponent,data:{title:'Obra',subTitle:'Almacen',url:'store'} },
      

    ],
  },
  {
    path: 'market',
    component: PagesComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', component: MarketComponent,data:{title:'Mercado'} },
      { path: 'pro', component: PromarketseeComponent,data:{title:'Proyecto'} },
      { path: 'artworkupd/:id', component: ArtworkUpdateComponent,data:{title:'Obra',subTitle:'Mercado',url:'store'} },

    ],
  },
  { path: '', redirectTo: "/dashboard", pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
