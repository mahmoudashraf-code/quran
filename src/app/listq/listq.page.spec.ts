import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListqPage } from './listq.page';

describe('ListqPage', () => {
  let component: ListqPage;
  let fixture: ComponentFixture<ListqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
