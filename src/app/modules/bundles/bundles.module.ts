import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BundlesComponent } from './bundles.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: BundlesComponent,
  },
  {
    path: '*',
    component: BundlesComponent,
  },
  {
    path: 'spain',
    component: DetailComponent,
  },
  {
    path: 'france',
    component: DetailComponent,
  },
  {
    path: 'italy',
    component: DetailComponent,
  },
  {
    path: 'norway',
    component: DetailComponent,
  },
  {
    path: 'portugal',
    component: DetailComponent,
  },
];

@NgModule({
  declarations: [BundlesComponent, DetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class BundlesModule {}
