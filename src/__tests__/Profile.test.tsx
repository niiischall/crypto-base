import ReactDOM from 'react-dom';

import { Profile } from '../pages/Profile';

const props = {};

describe('Navigation Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Profile {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});
