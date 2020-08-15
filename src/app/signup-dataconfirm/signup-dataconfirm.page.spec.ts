import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupDataconfirmPage } from './signup-dataconfirm.page';

describe('SignupDataconfirmPage', () => {
  let component: SignupDataconfirmPage;
  let fixture: ComponentFixture<SignupDataconfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDataconfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupDataconfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
