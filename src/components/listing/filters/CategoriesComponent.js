'use strict';

import React from 'react';
import CategoryItem from './categories/item';

require('styles/molecues/categories.scss');

class CategoriesComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        let items = null;
        if (this.props.categories.items) {
            items = this.props.categories.items.map((item, index) => {
                return <CategoryItem key={index} category={item}></CategoryItem>
            });
        }
        return (
            <div className="categories-component">
                <h2>Categoiries</h2>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

CategoriesComponent.displayName = 'ListingFiltersCategoriesComponent';

// Uncomment properties you need
// CategoriesComponent.propTypes = {
//     categories: PropTypes.object.isRequired
// };
// CategoriesComponent.defaultProps = {};

export default CategoriesComponent;
