import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFarmComponent } from './lib-farm.component';

describe('LibFarmComponent', () => {
  let component: LibFarmComponent;
  let fixture: ComponentFixture<LibFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
