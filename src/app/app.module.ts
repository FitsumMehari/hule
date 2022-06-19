import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IntroBackComponent } from './components/intro-back/intro-back.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroBackComponent,
    FooterComponent,
    BlogsComponent,
    HomePageComponent,
    StorePageComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
