import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHistoryUpdateComponent } from './task-history-update.component';

describe('TaskHistoryUpdateComponent', () => {
  let component: TaskHistoryUpdateComponent;
  let fixture: ComponentFixture<TaskHistoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskHistoryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskHistoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
