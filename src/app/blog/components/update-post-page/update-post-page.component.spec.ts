import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePostPageComponent } from './update-post-page.component';

describe('UpdatePostPageComponent', () => {
  let component: UpdatePostPageComponent;
  let fixture: ComponentFixture<UpdatePostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
