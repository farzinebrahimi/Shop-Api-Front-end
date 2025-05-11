import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/website/website.module').then ((m) => m.WebsiteModule),
  },
];
@NgModule ({
  imports: [RouterModule.forRoot (routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
