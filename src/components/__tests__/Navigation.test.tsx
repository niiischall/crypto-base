import ReactDOM from 'react-dom';

import { Navigation } from '../Navigation';

const props = {
  currentPage: '',
  switchPage: jest.fn(),
};

describe('Navigation Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Navigation {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});
