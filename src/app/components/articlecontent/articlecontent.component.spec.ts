import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlecontentComponent } from './articlecontent.component';

describe('ArticlecontentComponent', () => {
  let component: ArticlecontentComponent;
  let fixture: ComponentFixture<ArticlecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlecontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
