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
import { PromarketseeComponent } from './promarketsee/promarketsee.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [DialogComponent, MinigalleryComponent, ExpogalleryComponent,  PromarketseeComponent],
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
    HttpClientModule,
    InfiniteScrollModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MinigalleryComponent,
    ExpogalleryComponent,
  ]
})
export class ComponentsModule { }
