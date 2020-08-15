import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupDatacountPage } from './signup-datacount.page';

describe('SignupDatacountPage', () => {
  let component: SignupDatacountPage;
  let fixture: ComponentFixture<SignupDatacountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDatacountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupDatacountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
