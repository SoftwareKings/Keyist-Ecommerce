import {GPageNotFoundComponent} from "./g-page-not-found/g-page-not-found.component";
import {Routes} from "@angular/router";

export const AppRoutes: Routes = [
  {path: 'not-found', component: GPageNotFoundComponent, data: {message: 'Page not found!'}},
  {path: 'account', loadChildren: './account/account.module#AccountModule'},
  {path: 'faq', loadChildren: './faq/faq.module#FaqModule'},
  {path: '**', redirectTo: '/not-found'}
];

