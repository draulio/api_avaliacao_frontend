import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloReadComponent } from './protocolo-read.component';

describe('ProtocoloReadComponent', () => {
  let component: ProtocoloReadComponent;
  let fixture: ComponentFixture<ProtocoloReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocoloReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoloReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
