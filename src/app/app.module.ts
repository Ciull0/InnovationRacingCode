import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { HomeComponent } from './home/home.component';
import { BigComponent } from './big/big.component';
import { WideComponent } from './wide/wide.component';
import { ThreeElementsComponent } from './three-elements/three-elements.component';
import { TwoPlusOneComponent } from './two-plus-one/two-plus-one.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { TwoElementsComponent } from './two-elements/two-elements.component';
import { ElementComponent } from './element/element.component';
import { PageComponent, SafePipe } from './page/page.component';
import { PageElementComponent } from './page-element/page-element.component';
import { ContattiComponent } from './contatti/contatti.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { BlogComponent } from './blog/blog.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { HeroComponent } from './hero/hero.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TextboxComponent } from './textbox/textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftBarComponent,
    HomeComponent,
    BigComponent,
    WideComponent,
    ThreeElementsComponent,
    TwoPlusOneComponent,
    FooterComponent,
    FormComponent,
    TwoElementsComponent,
    ElementComponent,
    PageComponent,
    PageElementComponent,
    ContattiComponent,
    SponsorComponent,
    BlogComponent,
    ArticoloComponent,
    HeroComponent,
    TextboxComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
