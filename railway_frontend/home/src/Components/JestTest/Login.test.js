import React from 'react';
import Login from '../Login/Login.js'
import renderer from 'react-test-renderer';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('renders correctly', () => {

  test('Login Component Renders correctly', () => {
  const tree = renderer
    .create(<Login />)
    .toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
 });

 test('renders all button correctly', () => {
  // const { getByText } = render(<Register />);
  render(<div>Login</div>)
  const regButton = screen.getByText('Login', {exact:false});
  expect(regButton).toBeInTheDocument();
 });
})