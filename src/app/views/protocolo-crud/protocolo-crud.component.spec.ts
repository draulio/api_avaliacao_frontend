import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloCrudComponent } from './protocolo-crud.component';

describe('ProtocoloCrudComponent', () => {
  let component: ProtocoloCrudComponent;
  let fixture: ComponentFixture<ProtocoloCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocoloCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoloCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
