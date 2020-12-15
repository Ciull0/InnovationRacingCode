import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: "",
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
    path: ":pagina/:posizione",
    component: PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
