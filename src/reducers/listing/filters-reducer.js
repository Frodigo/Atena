import  {
    TOGGLE_FILTERS,
    SORT_POSTS
} from './../../actions/listing';

import {SORTING_DIRECTIONS} from './../../constants/sorting-directions';

export default function filtersReducer (state = {
    panelIsOpened: false,
    sortOrder: SORTING_DIRECTIONS[0].value
}, action) {
    switch (action.type) {
        case TOGGLE_FILTERS: {
            return Object.assign({}, state, {
                panelIsOpened: !state.panelIsOpened
            })
        }
        case SORT_POSTS: {
            return Object.assign({}, state, {
                sortOrder: action.sortOrder
            })
        }
        default: {
            return state;
        }
    }
}
