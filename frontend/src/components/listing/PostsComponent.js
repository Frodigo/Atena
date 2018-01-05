'use strict';

import React from 'react';
import PropTypes from 'prop-types'
import Item from './posts/ItemComponent';

require('styles/organisms/posts.scss');

class PostsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = this.props.posts.map(post =>
            <Item
                key={post.id}
                {...post}
            />
        );

        if (this.props.viewMode === 'grid') {
            return (
                <div className="posts-component grid">
                    {items}
                </div>
            );
        } else {
            return (
                <div className="posts-component list">
                    {items}
                </div>
            );
        }

    }
}

PostsComponent.displayName = 'ListingPostsComponent';

PostsComponent.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        author:PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string
        }).isRequired,
        date: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        comments: PropTypes.object,
        recommended: PropTypes.object
    }).isRequired).isRequired
};

export default PostsComponent;
