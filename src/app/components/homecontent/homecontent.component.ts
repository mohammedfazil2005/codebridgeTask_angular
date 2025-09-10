import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Store } from '@ngrx/store';
import { getOneArticle, loadArticles } from '../../../states/article/article.action';
import { selectedArticles } from '../../../states/article/article.selector';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HighlightPipe } from '../../pipes/highlight.pipe';
@Component({
  selector: 'app-homecontent',
  imports: [MatGridListModule,CommonModule,HighlightPipe],
  templateUrl: './homecontent.component.html',
  styleUrl: './homecontent.component.scss'
})
export class HomecontentComponent {
articles:Array<any>=[]
searchKeyword: string = ''

  constructor(private store: Store,private router:Router) {
    this.store.dispatch(loadArticles())
    this.store.select(selectedArticles).subscribe((res) => {
      this.searchKeyword=res.keyword
      this.articles=res.dummyArticles
    })
  }

  onReadmoreClick(id:number){
    this.store.dispatch(getOneArticle({id}))
    this.router.navigateByUrl("/article")
  }



}
