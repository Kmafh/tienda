import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtworkComponent } from '../pages/store-art/artwork/artwork.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { MinigalleryComponent } from './minigallery/minigallery.component';
import { ExpogalleryComponent } from './expogallery/expogallery.component';
import { GalleryMarketComponent } from './gallery-market/gallery-market.component';
import { PromarketseeComponent } from './promarketsee/promarketsee.component';

@NgModule({
  declarations: [DialogComponent, MinigalleryComponent, ExpogalleryComponent, GalleryMarketComponent, PromarketseeComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    RouterModule,
  ],
  exports: [
    MinigalleryComponent,
    ExpogalleryComponent,
    GalleryMarketComponent
  ]
})
export class ComponentsModule { }
