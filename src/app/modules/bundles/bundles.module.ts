import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BundlesComponent } from './bundles.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BundlesComponent,
  },
];

@NgModule({
  declarations: [BundlesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class BundlesModule {}
