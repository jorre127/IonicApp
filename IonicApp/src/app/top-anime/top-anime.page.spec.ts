import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopAnimePage } from './top-anime.page';

describe('TopAnimePage', () => {
  let component: TopAnimePage;
  let fixture: ComponentFixture<TopAnimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAnimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopAnimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
