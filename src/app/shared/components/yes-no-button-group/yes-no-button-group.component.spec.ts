import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoButtonGroupComponent } from './yes-no-button-group.component';

describe('YesNoButtonGroupComponent', () => {
  let component: YesNoButtonGroupComponent;
  let fixture: ComponentFixture<YesNoButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesNoButtonGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
