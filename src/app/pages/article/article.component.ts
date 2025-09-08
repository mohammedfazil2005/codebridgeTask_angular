import { Component } from '@angular/core';
import { ArticlecontentComponent } from "../../components/articlecontent/articlecontent.component";

@Component({
  selector: 'app-article',
  imports: [ArticlecontentComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

}
