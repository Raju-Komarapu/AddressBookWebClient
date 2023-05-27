import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home.component';

const routes: Routes = [
  {
    path: 'home/contacts',
    loadChildren:()=>import("./modules/home/home.module").then((m)=>m.HomeModule)
  }, {
    path: '',
    redirectTo: "/home/contacts",
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
