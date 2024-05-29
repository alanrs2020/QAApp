import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QauiComponent } from './qaui.component';

describe('QauiComponent', () => {
  let component: QauiComponent;
  let fixture: ComponentFixture<QauiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QauiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QauiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
