import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example1sComponent } from './example1s.component';

describe('Example1sComponent', () => {
  let component: Example1sComponent;
  let fixture: ComponentFixture<Example1sComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example1sComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example1sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
