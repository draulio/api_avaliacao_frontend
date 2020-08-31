import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloDeleteComponent } from './protocolo-delete.component';

describe('ProtocoloDeleteComponent', () => {
  let component: ProtocoloDeleteComponent;
  let fixture: ComponentFixture<ProtocoloDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocoloDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoloDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
