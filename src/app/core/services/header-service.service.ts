import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService{


  buttons: Menu[] = [
    { name : 'header.menulabel1', link: '/' },
    { name : 'header.menulabel2', link: '/goods' },
    { name : 'header.menulabel3', link: '/trucks' },
    ];
}


export interface Menu {
  name: string;
  link: string;
}
