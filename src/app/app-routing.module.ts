import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { UnknownRoutComponent } from './pages/unknown-rout/unknown-rout.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminAddContentComponent } from './pages/admin-add-content/admin-add-content.component';
import { AdminCreateComponent } from './pages/admin-create/admin-create.component';
import { AdminViewMessageComponent } from './pages/admin-view-message/admin-view-message.component';
import { AdminConfigComponent } from './pages/admin-config/admin-config.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'blog', component: BlogsComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'store', component: StorePageComponent, canActivate: [AuthGuard] },
  { path: 'modal', component: ModalComponent, canActivate: [AuthGuard] },
  { path: 'contact-us', component: ContactPageComponent, canActivate: [AuthGuard] },
  { path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent, canActivate: [AuthGuard] },
  { path: 'admin-dash', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin-create-product', component: AdminAddContentComponent, canActivate: [AuthGuard] },
  { path: 'admin-add-blog', component: AdminCreateComponent, canActivate: [AuthGuard] },
  { path: 'admin-view-msg', component: AdminViewMessageComponent, canActivate: [AuthGuard] },
  { path: 'admin-config', component: AdminConfigComponent, canActivate: [AuthGuard] },
  { path: '**', component: UnknownRoutComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [];
