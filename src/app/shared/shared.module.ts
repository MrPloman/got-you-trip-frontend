import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { InputTextComponent } from './components/inputs/input-text/input-text.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputSelectComponent } from './components/inputs/input-select/input-select.component';
import { InputNumberComponent } from './components/inputs/input-number/input-number.component';
import { FormService } from './services/form.service';
import { InputDateComponent } from './components/inputs/input-date/input-date.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ButtonComponent } from './components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoaderComponent } from './components/loader/loader.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { MatListModule } from '@angular/material/list';
import { TranslatorService } from './services/translator.service';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    InputTextComponent,
    InputSelectComponent,
    InputNumberComponent,
    InputDateComponent,
    ButtonComponent,
    LoaderComponent,
    LanguageSelectorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    InputTextComponent,
    InputSelectComponent,
    InputNumberComponent,
    InputDateComponent,
    LoaderComponent,
    LanguageSelectorComponent,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ButtonComponent,
    TranslateModule,
    MatGridListModule,
    MatListModule,
  ],
  providers: [FormService, MatDatepickerModule, TranslatorService],
})
export class SharedModule {}
