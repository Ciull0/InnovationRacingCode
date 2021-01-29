import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticoloComponent } from './articolo/articolo.component';
import { BlogComponent } from './blog/blog.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { SponsorComponent } from './sponsor/sponsor.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "eng",
    component: HomeComponent
  },
  {
    path: "contatti",
    component: ContattiComponent
  },
  {
    path: "stradale",
    component: HomeComponent
  },
  {
    path:"fuoristrada",
    component: HomeComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "blog/:articolo",
    component: ArticoloComponent,
  },
  {
    path: "calendario",
    component: BlogComponent
  },
  {
    path: "calendario/:articolo",
    component: ArticoloComponent,
  },
  {
    path: "sponsorPartner",
    component: BlogComponent
  },
  {
    path: "sponsorTecnici",
    component: BlogComponent
  },
  {
    path: "sponsorPartner/:sponsor",
    component: ArticoloComponent
  },
  {
    path: "sponsorTecnici/:sponsor",
    component: ArticoloComponent
  },
  {
    path: ":pagina/:posizione",
    component: PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
