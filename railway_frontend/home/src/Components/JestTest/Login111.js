import React from 'react';
import Login from '../Login/Login.js'
import renderer from 'react-test-renderer';
import {render,screen} from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });

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

//  it('renders a form', () => {
//   render(<Login />);
//   expect(form('appointment')).not.toBeNull();
// });

// it('has a submit button', () => {
//   render(<Login />);
//   const submitButton = element('input[type="submit"]');
//   expect(submitButton).not.toBeNull();
// });

})

// describe('Login Component' ,() => {
//   it('validates model on button click', () => {
//       const onSubmit = jest.fn();
//       const wrapper = mount(
//           <Login onSubmit={onSubmit}/>
//       );
//       const instance = wrapper.instance();
//       const submitBtn = Login.find('#loginbtn')
//       submitBtn.simulate('click')
//   //     render(<div>Login</div>)
//   // const regButton = screen.getByText('Login', {exact:false});
//   // regButton.simulate('click')
//       expect(onSubmit).toHaveBeenCalled();
//     });
//   })

// describe('Test Button component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });