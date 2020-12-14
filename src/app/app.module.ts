import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './global-components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { DesignPageComponent } from './pages/design-page/design-page.component';
import { PortfolioHeaderComponent } from './page-components/portfolio-header/portfolio-header.component';
import { DevelopmentEntryComponent } from './page-components/development-entry/development-entry.component';
import { DevelopmentCarouselComponent } from './page-components/development-carousel/development-carousel.component';
import { VideoPlayerComponent } from './page-components/video-player/video-player.component';
import { HomeHeaderComponent } from './page-components/home-header/home-header.component';
import { SectionTitleComponent } from './page-components/section-title/section-title.component';
import { FooterComponent } from './global-components/footer/footer.component';
import { DesignEntryComponent } from './page-components/design-entry/design-entry.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'development', component: DevelopmentPageComponent },
  { path: 'design', component: DesignPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    DevelopmentPageComponent,
    DesignPageComponent,
    PortfolioHeaderComponent,
    DevelopmentEntryComponent,
    DevelopmentCarouselComponent,
    VideoPlayerComponent,
    HomeHeaderComponent,
    SectionTitleComponent,
    FooterComponent,
    DesignEntryComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}),
    FlexLayoutModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
