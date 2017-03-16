'use strict';

import React from 'react';

require('styles/organisms/header.scss');

class HeaderComponent extends React.Component {
    render() {
        return (
            <header className="header-component">
                <div className="container">
                    Header
                </div>
            </header>
        );
    }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
