import React from 'react';
import Sidebar from '../User/UserSidebar/UserSidebar.js'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Sidebar />)
    .toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
 });