import { createReducer, on } from "@ngrx/store";
import { PostStateInterface } from "../types/postsState.interface";
import * as PostActions from './actions'

export const initialState: PostStateInterface = {
    isLoading: false,
    error: null,
    posts: []
}

export const reducer = createReducer(
    initialState,
    on(PostActions.getPosts, (state) => ({...state, isLoading: true}))
)