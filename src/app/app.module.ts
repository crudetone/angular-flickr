import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxMasonryModule } from 'ngx-masonry';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressBarModule
} from '@angular/material';

import { ImagesService } from './shared/images.service';
import { ImageItemComponent } from './image-item/image-item.component';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    ImageItemComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    CommonModule,
    NgxMasonryModule,
    InfiniteScrollModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule
  ],
  entryComponents: [ImageListComponent],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
