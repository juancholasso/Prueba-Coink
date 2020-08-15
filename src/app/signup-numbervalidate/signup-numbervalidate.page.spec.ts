import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupNumbervalidatePage } from './signup-numbervalidate.page';

describe('SignupNumbervalidatePage', () => {
  let component: SignupNumbervalidatePage;
  let fixture: ComponentFixture<SignupNumbervalidatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupNumbervalidatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupNumbervalidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
