'use strict';

import React from 'react';
import PropTypes from 'prop-types'
import {SORTING_DIRECTIONS} from '../../../constants/sorting-directions';

require('styles/molecues/sorting.scss');

class SortingComponent extends React.Component {
    render() {
        const sortingSelectboxOptions = SORTING_DIRECTIONS.map((item, index) =>
            <option value={item.value} key={index}>{item.label}</option>
        );
        return (
            <div className="sorting-component">
                <div className="form-group">
                    <select name="sorting-select" id="sorting-select" value={this.props.sortOrderValue} onChange={event => this.props.onChange(event.target.value)}>
                        {sortingSelectboxOptions}
                    </select>
                </div>
            </div>
        );
    }
}

SortingComponent.displayName = 'ListingToolbarSortingComponent';

SortingComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
    sortOrderValue: PropTypes.string.isRequired
};
// SortingComponent.defaultProps = {};

export default SortingComponent;
