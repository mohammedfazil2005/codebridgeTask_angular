import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectedArticles } from '../../../states/article/article.selector';
import {FormsModule} from "@angular/forms"
import { searchArticle } from '../../../states/article/article.action';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  count:number=0
  inputValue:string=""
  constructor(private store:Store){
    this.store.select(selectedArticles).subscribe((res)=>{
      this.count=res.dummyArticles.length
    })
  }

  onInpChange(){

      this.store.dispatch(searchArticle({keyword:this.inputValue.toLocaleLowerCase()}))
    
  }

}
