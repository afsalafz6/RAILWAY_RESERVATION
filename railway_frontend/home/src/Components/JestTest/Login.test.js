import React from 'react';
import Login from '../Login/Login.js'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Login />)
    .toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
 });