import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyPageComponent } from './lazy-page/lazy-page.component';

const routes: Routes = [
  {
    path: '', component:LazyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
