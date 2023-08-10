import { Action } from "@ngrx/store";
import { Article } from "../types/article.model";

export enum ArticleActionType {
    ADD_ITEM = "[ARTICLE] Add Article"
}

export class AddArticleAction implements Action {
    readonly type = ArticleActionType.ADD_ITEM;

    constructor(public payload: Article) {}
}

export type ArticleAction = AddArticleAction;