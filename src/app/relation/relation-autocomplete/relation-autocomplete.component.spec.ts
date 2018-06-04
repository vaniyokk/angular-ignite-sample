import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationAutocompleteComponent } from './relation-autocomplete.component';

describe('RelationAutocompleteComponent', () => {
  let component: RelationAutocompleteComponent;
  let fixture: ComponentFixture<RelationAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
