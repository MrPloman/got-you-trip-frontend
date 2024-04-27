import { NgModule } from '@angular/core';
import {
  provideRouter,
  RouterModule,
  Routes,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ABOUTComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: ABOUTComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
  ],
})
export class AppRoutingModule {}
