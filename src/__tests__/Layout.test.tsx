import ReactDOM from 'react-dom';

import { Layout } from '../pages/Layout';

const props = {
  currentPage: '',
};

describe('Layout Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Layout {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});
