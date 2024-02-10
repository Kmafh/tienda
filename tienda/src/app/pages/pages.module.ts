import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { StoreArtComponent } from './store-art/store-art.component';
import {MatIconModule} from '@angular/material/icon';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import { ArtworkComponent } from './store-art/artwork/artwork.component';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { ComponentsModule } from '../components/components.module';
import { MarketComponent } from './market/market.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    StoreArtComponent,
    ArtworkComponent,
    MarketComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    ComponentsModule,
    MatSidenavModule, 
    MatListModule,
    MatCardModule
  ]
})
export class PagesModule { }
