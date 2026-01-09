import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Products } from './components/products/products';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBar } from './components/side-bar/side-bar';
import { Content } from './components/content/content';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Products,
    SideBar,
    Content
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
