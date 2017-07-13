'use strict';

import React from 'react';

require('styles/molecues/tags.scss');

class TagsComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        let tags = this.props.tags.map((tag, index) => {
            return <li key={index}>
                <button onClick={() => this.props.onToggleTag(tag)} type="button" className={(this.props.selectedTags.indexOf(tag) > -1) ? 'selected' : ''}>{tag}</button>
            </li>
        });
        return (
            <div className="tags-component">
                <h2>Tags</h2>

                <ul>
                    {tags}
                </ul>
            </div>
        )
    }
}


TagsComponent.displayName = 'ListingFiltersTagsComponent';

// Uncomment properties you need
// TagsComponent.propTypes = {};
// TagsComponent.defaultProps = {};

export default TagsComponent;
