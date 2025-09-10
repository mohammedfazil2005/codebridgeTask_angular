import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectedArticles } from '../../../states/article/article.selector';
import { Router } from '@angular/router';
interface articleInterface{
  title:string,
  summary:string
  image_url:string
}
@Component({
  selector: 'app-articlecontent',
  imports: [],
  templateUrl: './articlecontent.component.html',
  styleUrl: './articlecontent.component.scss'
})

export class ArticlecontentComponent {
  
  article:articleInterface={title:"",summary:"",image_url:""}
  constructor (private store:Store,private router:Router){
    this.store.select(selectedArticles).subscribe((res:any)=>{
      console.log(res.oneArticle)
      this.article=res.oneArticle
       if (!res.oneArticle.title) {
        this.router.navigateByUrl('/');
      }
    })
  }

 
}
