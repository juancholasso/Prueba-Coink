import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupAuthorizePage } from './signup-authorize.page';

describe('SignupAuthorizePage', () => {
  let component: SignupAuthorizePage;
  let fixture: ComponentFixture<SignupAuthorizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAuthorizePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupAuthorizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
