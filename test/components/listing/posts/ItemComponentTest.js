/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ItemComponent from 'components/listing/posts/ItemComponent.js';

describe('ItemComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(ItemComponent, {
        author: {},
        comments: {},
        recommended: {}
    });
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('post-item-component post-item');
  });
});
