import  {
    GET_CATEGORIES,
    CATEGORIES_HAS_ERRORED,
    CATEGORIES_LOADING
} from './../../actions/listing';

export default function categoriesReducer(state = {
    items: [],
    isLoading: false,
    hasError: false
}, action) {
    switch(action.type) {
        case GET_CATEGORIES: {
            return Object.assign({}, state, {
                items: action.categories
            });
        }
        case CATEGORIES_HAS_ERRORED: {
            return Object.assign({}, state, {
                hasError: true
            });
        }
        case CATEGORIES_LOADING: {
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        }
        default: {
            return state;
        }
    }
}
