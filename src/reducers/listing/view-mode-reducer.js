import {
    SWITCH_VIEW
} from './../../actions/listing';

export default function viewModeReducer (state = 'grid', action) {
    switch (action.type) {
        case SWITCH_VIEW: {
            return action.viewMode;
        }
        default: {
            return state;
        }
    }
}
