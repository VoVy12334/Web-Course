import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentviewComponent } from './componentview.component';

describe('ComponentviewComponent', () => {
  let component: ComponentviewComponent;
  let fixture: ComponentFixture<ComponentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
