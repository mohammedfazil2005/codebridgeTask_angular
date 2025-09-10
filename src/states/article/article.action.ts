import { createAction, props } from "@ngrx/store";


export const loadArticles=createAction('[Article] LoadArticles')
export const loadArticlesSuccess=createAction('[Article] LoadArticlesSuccess',props<{articles:any}>())
export const loadArticlesFailure=createAction('[Article] LoadArticlesFailure',props<{error:string}>())
export const searchArticle=createAction('[Article] SearchArticle',props<{keyword:string}>())
export const getOneArticle=createAction('[Article] GetOneArticle',props<{id:number}>())