import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloCreateComponent } from './protocolo-create.component';

describe('ProtocoloCreateComponent', () => {
  let component: ProtocoloCreateComponent;
  let fixture: ComponentFixture<ProtocoloCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocoloCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoloCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
