import ReactDOM from 'react-dom';

import { Header } from '../components/Header';

const props = {};

describe('Header Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Header {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});
