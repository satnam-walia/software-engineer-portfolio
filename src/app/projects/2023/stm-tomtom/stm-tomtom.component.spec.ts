import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StmTomtomComponent } from './stm-tomtom.component';

describe('StmTomtomComponent', () => {
  let component: StmTomtomComponent;
  let fixture: ComponentFixture<StmTomtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StmTomtomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StmTomtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
