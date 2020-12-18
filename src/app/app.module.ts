import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodeComponent } from './episode/episode.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CharacterComponent } from './character/character.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CharacterComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
