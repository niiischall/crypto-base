import ReactDOM from 'react-dom';

import { Search } from '../pages/Search';

const props = {};

describe('Navigation Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Search {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});
