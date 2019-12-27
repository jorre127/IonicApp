import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudioSearchPage } from './studio-search.page';

describe('StudioSearchPage', () => {
  let component: StudioSearchPage;
  let fixture: ComponentFixture<StudioSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudioSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
