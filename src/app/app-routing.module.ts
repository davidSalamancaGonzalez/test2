import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NoComponentComponent } from './core/components/no-component/no-component.component';
import { GoodsComponent } from './features/goods/goods.component';
import { DetailsGoodsComponent } from './features/details-goods/details-goods.component';
import { TrucksComponent } from './features/trucks/trucks.component';
import { DetailsTrucksComponent } from './features/details-trucks/details-trucks.component';

const routes: Routes = [
  {
    path: '', // data: { breadcrumb: '' },
    children: [
      {
        path: '',
        data: { breadcrumb: null },
        component: HomeComponent,
      },
      {
        path: 'goods',
        data: { breadcrumb: 'goods' },
        children: [
          {
            path: '',
            data: { breadcrumb: null },
            component: GoodsComponent,
          },
          {
            path: 'details/:id',
            data: { breadcrumb: 'details' },
            children: [
              {
                path: '',
                data: { breadcrumb: null },
                component: DetailsGoodsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'trucks',
        data: { breadcrumb: 'trucks' },
        children: [
          {
            path: '',
            data: { breadcrumb: null },
            component: TrucksComponent,
          },
          {
            path: 'details/:id',
            data: { breadcrumb: 'details' },
            children: [
              {
                path: '',
                data: { breadcrumb: null },
                component: DetailsTrucksComponent,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '**',
    data: { breadcrumb: 'error' },
    component: NoComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
