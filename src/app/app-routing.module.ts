import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  { path: 'blog', component: BlogsComponent },
  { path: 'home', component: HomePageComponent },
  { path:  'store', component: StorePageComponent},
  { path: 'modal', component: ModalComponent },
  { path: 'contact-us', component: ContactPageComponent},
  {path: 'about-us', component: AboutUsComponent }
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