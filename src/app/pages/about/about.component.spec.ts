import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABOUTComponent } from './about.component';

describe('ABOUTComponent', () => {
  let component: ABOUTComponent;
  let fixture: ComponentFixture<ABOUTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ABOUTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ABOUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
