import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NoComponentComponent } from './components/no-component/no-component.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavBarComponent,
    NoComponentComponent,

  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModuleModule { }
