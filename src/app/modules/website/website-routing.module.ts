import {RouterModule, Routes} from '@angular/router';
import {WebsiteComponent} from './website.component';
import {HomePageComponent} from './_pages/home-page/home-page.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '', component: WebsiteComponent, children: [
      {path: '', component: HomePageComponent, pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebsiteRoutingModule {}


