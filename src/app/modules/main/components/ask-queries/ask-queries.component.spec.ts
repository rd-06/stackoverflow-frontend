import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQueriesComponent } from './ask-queries.component';

describe('AskQueriesComponent', () => {
  let component: AskQueriesComponent;
  let fixture: ComponentFixture<AskQueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskQueriesComponent]
    });
    fixture = TestBed.createComponent(AskQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
