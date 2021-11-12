import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformSearchComponent } from './perform-search.component';

describe('PerformSearchComponent', () => {
  let component: PerformSearchComponent;
  let fixture: ComponentFixture<PerformSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
