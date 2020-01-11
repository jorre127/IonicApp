import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeasonSearchPage } from './season-search.page';

describe('SeasonSearchPage', () => {
  let component: SeasonSearchPage;
  let fixture: ComponentFixture<SeasonSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeasonSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
