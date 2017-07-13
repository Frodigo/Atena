'use strict';

import React from 'react';
import Categories from './filters/CategoriesComponent';
import Tags from './filters/TagsComponent';

require('styles/organisms/filters.scss');

class FiltersComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="filters-component">
                <nav>
                    <Categories categories={this.props.categories}/>
                    <Tags
                        onToggleTag={this.props.onToggleTag}
                        isLoading={this.props.tags.isLoading}
                        selectedTags={this.props.tags.selectedItems}
                        tags={this.props.tags.items} />
                    <button type="button"
                            className="action toggle-filters" onClick={this.props.onToggle}
                    >
                        Toggle filters
                    </button>
                </nav>
            </aside>
        );
    }
}

FiltersComponent.displayName = 'ListingFiltersComponent';

// Uncomment properties you need
// FiltersComponent.propTypes = {
//     categories: PropTypes.object.isRequired
// };
// FiltersComponent.defaultProps = {};

export default FiltersComponent;
