'use strict';

import React from 'react';
import Moment from 'react-moment';

require('styles/molecues/post-item.scss');
// TODO: add action to increase recommended post count

class ItemComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    getCommentsUrl () {
        return this.props.url + '#comments';
    }

    render() {
        return (
            <div className="post-item-component post-item">
                <a href={this.props.url} className="post-item__image__holder">
                    <figure className="post-item__image" style={{backgroundImage: 'url(' + this.props.image + ')'}}>
                    </figure>
                </a>
                <section className="post-item__section">
                    <h2 className="post-item__title">
                        <a href={this.props.url}>{this.props.title}</a>
                    </h2>
                    <small className="post-item__meta">
                        Created by <a href={this.props.author.url}>{this.props.author.name}</a>
                        <Moment fromNow>{new Date(this.props.date)}</Moment>
                    </small>
                    <footer className="post-item__footer">
                        <a href={this.getCommentsUrl()} className="action">Comments: {this.props.comments.count}</a>
                        <button type="button" className="action">Likes: {this.props.recommended.count}</button>
                        <a href={this.props.url} className="action">See</a>
                    </footer>
                </section>
            </div>
        )
    }
}
ItemComponent.displayName = 'ListingPostsItemComponent';

// Uncomment properties you need
// ItemComponent.propTypes = {};
// ItemComponent.defaultProps = {};

export default ItemComponent;
