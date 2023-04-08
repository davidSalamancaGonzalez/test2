import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AppRoutingModule } from '../app-routing.module';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BreadcrumbModule,
    TranslateModule
  ],
  exports: [
    BreadcrumbComponent,
    BackButtonComponent
  ]
})
export class SharedModule { }
