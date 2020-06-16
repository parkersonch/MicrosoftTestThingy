import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VibeCheckComponent } from './vibe-check.component';

describe('VibeCheckComponent', () => {
  let component: VibeCheckComponent;
  let fixture: ComponentFixture<VibeCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibeCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VibeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
