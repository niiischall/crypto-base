import ReactDOM from 'react-dom';

import { Home } from '../pages/Home';

const props = {};

describe('Home Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Home {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});
