import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationTableComponent } from './relation-table.component';

describe('RelationTableComponent', () => {
  let component: RelationTableComponent;
  let fixture: ComponentFixture<RelationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
