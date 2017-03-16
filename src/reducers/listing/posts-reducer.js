import  {
    GET_POSTS,
    POSTS_HAS_ERRORED,
    POSTS_IS_LOADING
} from './../../actions/listing';

export default function postsReducer (state = {
    isLoading: false,
    hasError: false,
    items: []
}, action) {
    switch (action.type) {
        case GET_POSTS: {
            return Object.assign({}, state, {
                items: action.posts
            });
        }
        case POSTS_HAS_ERRORED: {
            return Object.assign({}, state, {
                hasError: true
            });
        }
        case POSTS_IS_LOADING: {
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        }

        default: {
            return state;
        }
    }
}
