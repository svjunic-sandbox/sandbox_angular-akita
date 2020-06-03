import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example1matComponent } from './example1mat.component';

describe('Example1matComponent', () => {
  let component: Example1matComponent;
  let fixture: ComponentFixture<Example1matComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example1matComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example1matComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
