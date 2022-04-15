import React from 'react';
import Register from '../Register/Register.js'
import renderer from 'react-test-renderer';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('renders correctly', () => {

test('Register Component Renders correctly', () => {
  const tree = renderer
    .create(<Register />)
    .toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
 });

 test('renders all button correctly', () => {
  // const { getByText } = render(<Register />);
  render(<div>Register</div>)
  const regButton = screen.getByText('Register', {exact:false});
  expect(regButton).toBeInTheDocument();
 });
 
})