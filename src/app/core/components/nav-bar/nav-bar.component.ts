import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService, Menu } from '../../services/header-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  languageBrowser: string = navigator.language.slice(0, 2);
  language: string = localStorage.getItem('lang') || this.languageBrowser;
  buttons: Menu[];
  icon : string = ''


  constructor(private translate: TranslateService, private header : HeaderService) {
    this.translate.setDefaultLang(this.language.slice(0, 2));
    this.buttons = this.header.buttons;

    if(environment.production){
      this.icon = './assets/icons/pro.png'
    } else {
      this.icon = './assets/icons/dev.png'
    }
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }





}
