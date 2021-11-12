import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdverseMediaComponent } from './search-adverse-media.component';

describe('SearchAdverseMediaComponent', () => {
  let component: SearchAdverseMediaComponent;
  let fixture: ComponentFixture<SearchAdverseMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAdverseMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdverseMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
