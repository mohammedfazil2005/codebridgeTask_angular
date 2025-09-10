import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../app/services/api.service";
import { loadArticles, loadArticlesFailure, loadArticlesSuccess } from "./article.action";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class ArticleEffect{
   
     loadProduct;
    constructor(private api: ApiService, private action: Actions) {
        this.loadProduct= createEffect(() =>
            this.action.pipe(
                ofType(loadArticles),
                switchMap(() => this.api.getArticles().pipe(
                    map((res:any) => loadArticlesSuccess({ articles: res.results })),
                    catchError((err) => of(loadArticlesFailure({ error: "Something went wrong!" })))
                ))
            )
        )
    }

    
    
}