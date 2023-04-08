import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTrucksComponent } from './details-trucks.component';

describe('DetailsTrucksComponent', () => {
  let component: DetailsTrucksComponent;
  let fixture: ComponentFixture<DetailsTrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTrucksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
