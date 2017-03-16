'use strict';

import React from 'react';
import PropTypes from 'prop-types'
import ViewSwitcher from './toolbar/ViewSwitcherComponent';
import Sorting from './toolbar/SortingComponent';

require('styles/organisms/toolbar.scss');

const ToolbarComponent = ({onSwitchViewMode, onChangeSortOrder, sortOrderValue}) => (
    <nav className="toolbar-component">
        <ViewSwitcher onSwitch={onSwitchViewMode}/>
        <Sorting sortOrderValue={sortOrderValue} onChange={onChangeSortOrder}/>
    </nav>
);

ToolbarComponent.displayName = 'ListingToolbarComponent';

ToolbarComponent.propTypes = {
    onSwitchViewMode: PropTypes.func.isRequired,
    onChangeSortOrder: PropTypes.func.isRequired,
    sortOrderValue: PropTypes.string.isRequired
};
// ToolbarComponent.defaultProps = {};

export default ToolbarComponent;
