import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import postsReducer from './../reducers/listing/posts-reducer';
import viewModeReducer from './../reducers/listing/view-mode-reducer';
import filtersReducer from './../reducers/listing/filters-reducer';
import categoriesReducer from './../reducers/listing/categories-reducer';
import tagsReducer from './../reducers/listing/tags-reducer'

const reducer = combineReducers({
    viewMode: viewModeReducer,
    posts: postsReducer,
    filters: filtersReducer,
    categories: categoriesReducer,
    tags: tagsReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
);

export default store;
