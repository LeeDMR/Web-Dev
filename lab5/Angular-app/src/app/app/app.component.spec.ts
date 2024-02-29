import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent2 } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent2;
  let fixture: ComponentFixture<AppComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent2]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
