import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AboutComponent} from "./about/about.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'albums/:id', component: AlbumDetailComponent },
      { path: 'albums/:id/photos', component: AlbumPhotosComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

