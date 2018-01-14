/// <reference path='../../declarations.d.ts'/>

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './Navigation';
import AboutComponent from './about';
import HomeComponent from './home';
import BlogModule from './blog';

const ROUTES = RouterModule.forRoot([
  {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'blog',
    loadChildren: './blog#BlogModule'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]);

@NgModule({
  imports: [
    BrowserModule,
    ROUTES,
    BlogModule,
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
