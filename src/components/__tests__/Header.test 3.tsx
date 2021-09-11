import ReactDOM from 'react-dom';

import { Header } from '../Header';

const props = { 
  currentPage: '',
};

describe('Header Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Header {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});
