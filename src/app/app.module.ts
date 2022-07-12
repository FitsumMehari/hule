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
import { ContactIntroComponent } from './components/contact-intro/contact-intro.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AboutIntroComponent } from './components/about-intro/about-intro.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartIntroComponent } from './components/cart-intro/cart-intro.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BackLogComponent } from './pages/back-log/back-log.component';
import { StoreItemInteractionService } from './store-item-interaction.service';
import { FillCartService } from './fill-cart.service';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroBackComponent,
    FooterComponent,
    BlogsComponent,
    HomePageComponent,
    StorePageComponent,
    ModalComponent,
    ContactIntroComponent,
    ContactPageComponent,
    AboutUsComponent,
    AboutIntroComponent,
    CartPageComponent,
    CartIntroComponent,
    LoginPageComponent,
    BackLogComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FillCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
