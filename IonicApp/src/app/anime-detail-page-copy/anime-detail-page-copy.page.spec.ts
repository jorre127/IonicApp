import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimeDetailPageCopyPage } from './anime-detail-page-copy.page';

describe('AnimeDetailPageCopyPage', () => {
  let component: AnimeDetailPageCopyPage;
  let fixture: ComponentFixture<AnimeDetailPageCopyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeDetailPageCopyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimeDetailPageCopyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
