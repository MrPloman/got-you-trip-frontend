import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BundlesComponent } from './bundles.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BundlesComponent,
  },
];

@NgModule({
  declarations: [BundlesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BundlesModule {}
