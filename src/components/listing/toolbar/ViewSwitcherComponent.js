'use strict';

import React, {PropTypes} from 'react';

require('styles/molecues/view-switcher.scss');

const ViewSwitcherComponent = ({onSwitch}) => (
    <div className="view-switcher-component">
        <button type="button"
                className="action switch-view list"
                onClick={() => onSwitch('list')}>
            List view
        </button>
        <button type="button"
                className="action switch-view grid"
                onClick={() => onSwitch('grid')}>
            Grid view
        </button>
    </div>
);


ViewSwitcherComponent.displayName = 'ListingToolbarViewSwitcherComponent';

// Uncomment properties you need
ViewSwitcherComponent.propTypes = {
    onSwitch: PropTypes.func.isRequired
};
// ViewSwitcherComponent.defaultProps = {};

export default ViewSwitcherComponent;
