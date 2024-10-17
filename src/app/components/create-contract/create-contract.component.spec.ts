import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContractComponent } from '@components/create-contract/create-contract.component';

describe('CreateContractComponent', () => {
  let component: CreateContractComponent;
  let fixture: ComponentFixture<CreateContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateContractComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
