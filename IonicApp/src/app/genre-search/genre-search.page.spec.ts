import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenreSearchPage } from './genre-search.page';

describe('GenreSearchPage', () => {
  let component: GenreSearchPage;
  let fixture: ComponentFixture<GenreSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenreSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
