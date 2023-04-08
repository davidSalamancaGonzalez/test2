import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GoodsComponent } from './goods/goods.component';
import { CardComponent } from './components/card/card.component';
import { DetailsGoodsComponent } from './details-goods/details-goods.component';
import { AppRoutingModule } from '../app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from "../shared/shared.module";
import { TrucksComponent } from './trucks/trucks.component';
import { DetailsTrucksComponent } from './details-trucks/details-trucks.component';



@NgModule({
    declarations: [
        HomeComponent,
        GoodsComponent,
        CardComponent,
        DetailsGoodsComponent,
        TrucksComponent,
        DetailsTrucksComponent
    ],
    exports: [
        HomeComponent,
        GoodsComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        TranslateModule,
        SharedModule
    ]
})
export class FeaturesModule { }
