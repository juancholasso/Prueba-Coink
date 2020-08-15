import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupSecurityvalidatePage } from './signup-securityvalidate.page';

describe('SignupSecurityvalidatePage', () => {
  let component: SignupSecurityvalidatePage;
  let fixture: ComponentFixture<SignupSecurityvalidatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSecurityvalidatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupSecurityvalidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
