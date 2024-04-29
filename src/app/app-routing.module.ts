import { NgModule } from '@angular/core';
import {
  provideRouter,
  RouterModule,
  Routes,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '*',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'bundles',
    loadChildren: () =>
      import('./modules/bundles/bundles.module').then((m) => m.BundlesModule),
  },
  {
    path: 'budget',
    loadChildren: () =>
      import('./modules/budget/budget.module').then((m) => m.BudgetModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
  ],
})
export class AppRoutingModule {}
