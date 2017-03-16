'use strict';

import React from 'react';


export default class CategoryItem extends React.Component {
    render () {
        return (
            <li key={this.props.index}>
                <a href={this.props.category.url}>{this.props.category.name}</a>

                {this.props.category.items && this.props.category.items.length &&
                    <ul>
                        {this.props.category.items.map((category, index) => {
                            return CategoryItem.renderRecursive(category, index);
                        })}
                    </ul>
                }
            </li>
        )
    }

    static renderRecursive (category, index) {
        return React.createElement(CategoryItem, {category, key: index});
    }
}
