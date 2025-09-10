import { createReducer, on } from "@ngrx/store"
import { getOneArticle, loadArticlesFailure, loadArticlesSuccess, searchArticle } from "./article.action"

interface ArticleInterface{
    articles:Array<any>
    dummyArticles:Array<any>
    oneArticle:object
    error:string,
      keyword: string; 
}

const intialArticleState:ArticleInterface={
    articles:[],
    dummyArticles:[],
    oneArticle:{},
    error:"",
      keyword:""
}


export const articleReducer=createReducer(intialArticleState,
   on(loadArticlesSuccess,(state,{articles})=>({...state,articles,dummyArticles:articles,error:""})),
   on(loadArticlesFailure,(state,{error})=>({...state,error})),
   on(searchArticle,(state,{keyword})=>{
    if(keyword==""){
        return {...state,dummyArticles:state.articles,keyword}
    }
    let titleMatches=state.articles.filter((each)=>each.title.toLocaleLowerCase().includes(keyword))
    let descMatches=state.articles.filter((each)=>!titleMatches.includes(each)&&each.summary.toLocaleLowerCase().includes(keyword))
    return{...state,dummyArticles:[...titleMatches,...descMatches],keyword}
   }),
   on(getOneArticle,(state,{id})=>{
    let findArticle=state.articles.find((each)=>each.id==id)
    return{...state,oneArticle:findArticle}
   })
)