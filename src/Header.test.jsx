import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

describe('<Header />', () => {
  test('Render <Header /> Correctly', () => {
    const output = renderer.create(<Header />).toJSON();
    expect(output).toMatchSnapshot();
  })
});