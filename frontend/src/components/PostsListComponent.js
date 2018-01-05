'use strict';

import React from 'react'
import PropTypes from 'prop-types'
import Filters from './listing/FiltersComponent';
import Toolbar from './listing/ToolbarComponent';
import Posts from './listing/PostsComponent';
import classnames from 'classnames';

require('styles/organisms/listing.scss');

// TODO: move to config
require('file-loader?name=categories.json&outputPath=data/');

class ListingComponent extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchPosts(this.props.config.postsApiUrl, this.props.filters);
        this.props.fetchCategories(this.props.config.categoriesApiUrl);
        this.props.fetchTags(this.props.config.tagsDataUrl);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.filters !== nextProps.filters) {
            this.props.fetchPosts(this.props.config.postsApiUrl, nextProps.filters);
        }
    }

    switchViewMode = (mode) => {
        this.props.onSwitchViewMode(mode);
    };

    toggleFilters = () => {
        this.props.onToggleFilters();
    };


    render () {
        const ListingComponentClass = classnames({
            'listing-component': true,
            'filters-opened': this.props.filters.panelIsOpened
        });


        return (
            <main className={ListingComponentClass}>
                <Filters
                    tags={this.props.tags}
                    categories={this.props.categories.items}
                    onToggle={this.toggleFilters}
                    onToggleTag={this.props.onToggleTagSelection} />
                <article>
                    <Toolbar sortOrderValue={this.props.filters.sortOrder} onChangeSortOrder={this.props.changeSortOrder} onSwitchViewMode={this.switchViewMode}/>
                    <Posts posts={this.props.posts.items} viewMode={this.props.viewMode}/>
                </article>
            </main>
        );
    }
}

ListingComponent.displayName = 'ListingComponent';
ListingComponent.propTypes = {
    onSwitchViewMode: PropTypes.func.isRequired,
    onToggleFilters: PropTypes.func.isRequired
};

export default ListingComponent;

// TODO: add infinie scroll
