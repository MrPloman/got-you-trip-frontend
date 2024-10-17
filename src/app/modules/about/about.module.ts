import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { EmailService } from 'src/app/shared/services/email.service';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  providers: [EmailService],
})
export class AboutModule {}
