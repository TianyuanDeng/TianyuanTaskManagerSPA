import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHistoryCreateComponent } from './task-history-create.component';

describe('TaskHistoryCreateComponent', () => {
  let component: TaskHistoryCreateComponent;
  let fixture: ComponentFixture<TaskHistoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskHistoryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskHistoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
