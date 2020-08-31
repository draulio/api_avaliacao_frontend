import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloLoginComponent } from './protocolo-login.component';

describe('ProtocoloLoginComponent', () => {
  let component: ProtocoloLoginComponent;
  let fixture: ComponentFixture<ProtocoloLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocoloLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoloLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
