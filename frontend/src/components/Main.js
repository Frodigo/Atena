require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Header from './HeaderComponent';
import Listing from './../containers/listing';
import { Provider } from 'react-redux';
import listingStore from './../stores/listing';

const AppComponent = () => (
    <div className="index">
        <Header/>
        <Provider store={listingStore}>
            <Listing/>
        </Provider>
    </div>
);

export default AppComponent;
