import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationFieldComponent } from './relation-field.component';

describe('HeroSearchComponent', () => {
  let component: RelationFieldComponent;
  let fixture: ComponentFixture<RelationFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
