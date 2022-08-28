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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './intinterceptors/auth.interceptor';
import { UnknownRoutComponent } from './pages/unknown-rout/unknown-rout.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { AdminSideNavComponent } from './components/admin-side-nav/admin-side-nav.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminAddContentComponent } from './pages/admin-add-content/admin-add-content.component';
import { AdminCreateComponent } from './pages/admin-create/admin-create.component';
import { AdminViewMessageComponent } from './pages/admin-view-message/admin-view-message.component';
import { AdminConfigComponent } from './pages/admin-config/admin-config.component';

import { AuthGuard } from './auth.guard';

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
    SignupPageComponent,
    UnknownRoutComponent,
    AdminNavComponent,
    AdminSideNavComponent,
    AdminDashboardComponent,
    AdminAddContentComponent,
    AdminCreateComponent,
    AdminViewMessageComponent,
    AdminConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    FillCartService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
