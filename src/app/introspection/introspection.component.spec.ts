import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrospectionComponent } from './introspection.component';

describe('IntrospectionComponent', () => {
  let component: IntrospectionComponent;
  let fixture: ComponentFixture<IntrospectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntrospectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrospectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
