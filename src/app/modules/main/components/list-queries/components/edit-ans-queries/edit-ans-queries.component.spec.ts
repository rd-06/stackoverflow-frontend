import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnsQueriesComponent } from './edit-ans-queries.component';

describe('EditAnsQueriesComponent', () => {
  let component: EditAnsQueriesComponent;
  let fixture: ComponentFixture<EditAnsQueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAnsQueriesComponent]
    });
    fixture = TestBed.createComponent(EditAnsQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
