// import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

// test('renders App react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Railway Reservation System/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
 });