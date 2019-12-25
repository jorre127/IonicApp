import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListDetailPagePage } from './list-detail-page.page';

describe('ListDetailPagePage', () => {
  let component: ListDetailPagePage;
  let fixture: ComponentFixture<ListDetailPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDetailPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListDetailPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
