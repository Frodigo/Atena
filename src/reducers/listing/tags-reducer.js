import  {
    GET_TAGS,
    TAGS_HAS_ERRORED,
    TAGS_LOADING,
    TOGGLE_TAG_SELECTION
} from './../../actions/listing';

export default function tagsReducer(state = {
    items: [],
    selectedItems: [],
    isLoading: false,
    hasError: false
}, action) {
    switch(action.type) {
        case GET_TAGS: {
            return Object.assign({}, state, {
                items: action.tags
            });
        }
        case TAGS_HAS_ERRORED: {
            return Object.assign({}, state, {
                hasError: true
            });
        }
        case TAGS_LOADING: {
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        }
        case TOGGLE_TAG_SELECTION: {
            let tagIndex = state.selectedItems.indexOf(action.tag);
            if(tagIndex > -1) {
                return Object.assign({}, state, {
                    selectedItems: [
                        ...state.selectedItems.slice(0, tagIndex),
                        ...state.selectedItems.slice(tagIndex + 1)
                    ]
                });

            } else {
                return Object.assign({}, state, {
                    selectedItems: [
                        ...state.selectedItems,
                        action.tag
                    ]
                });
            }

        }
        default: {
            return state;
        }
    }
}
