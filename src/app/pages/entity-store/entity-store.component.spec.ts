import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityStoreComponent } from './entity-store.component';

describe('EntityStoreComponent', () => {
  let component: EntityStoreComponent;
  let fixture: ComponentFixture<EntityStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
