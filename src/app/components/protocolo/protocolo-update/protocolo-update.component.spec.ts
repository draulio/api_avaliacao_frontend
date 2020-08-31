import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloUpdateComponent } from './protocolo-update.component';

describe('ProtocoloUpdateComponent', () => {
  let component: ProtocoloUpdateComponent;
  let fixture: ComponentFixture<ProtocoloUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocoloUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoloUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
