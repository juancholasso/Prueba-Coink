import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupSecurityPage } from './signup-security.page';

describe('SignupSecurityPage', () => {
  let component: SignupSecurityPage;
  let fixture: ComponentFixture<SignupSecurityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSecurityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
