import { createSelector } from "@ngrx/store"

const selectorNgrx=(state:any)=>state.article

export const selectedArticles=createSelector(selectorNgrx,(state)=>state)
