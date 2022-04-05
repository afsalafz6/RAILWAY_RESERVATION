import React from 'react';
import Register from '../Register/Register.js'
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(<Register />)
    .toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
 });
