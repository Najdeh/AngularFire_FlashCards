import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardsCrudComponent } from './flash-cards-crud.component';

describe('FlashCardsCrudComponent', () => {
  let component: FlashCardsCrudComponent;
  let fixture: ComponentFixture<FlashCardsCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashCardsCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
