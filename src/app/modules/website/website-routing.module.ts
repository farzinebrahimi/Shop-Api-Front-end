import {RouterModule, Routes} from '@angular/router';
import {WebsiteComponent} from './website.component';
import {HomePageComponent} from './_pages/home-page/home-page.component';
import {NgModule} from '@angular/core';
import {MemberListComponent} from './_components/members/member-list/member-list.component';
import {MemberDetailComponent} from './_components/members/member-detail/member-detail.component';
import {ListsComponent} from './_components/lists/lists.component';
import {MessagesComponent} from './_components/messages/messages.component';
import {authGuard} from '../../core/_guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: WebsiteComponent, children: [
      {path: '', component: HomePageComponent},
      {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
          {path: 'home', component: HomePageComponent},
          {path: 'members', component: MemberListComponent},
          {path: 'memebers/:id', component: MemberDetailComponent},
          {path: 'lists', component: ListsComponent},
          {path: 'messages', component: MessagesComponent},
          {path: '**', component: HomePageComponent, pathMatch: 'full'},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebsiteRoutingModule {
}


