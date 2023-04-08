import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGoodsComponent } from './details-goods.component';

describe('DetailsGoodsComponent', () => {
  let component: DetailsGoodsComponent;
  let fixture: ComponentFixture<DetailsGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsGoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
