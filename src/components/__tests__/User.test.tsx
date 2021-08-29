import ReactDOM from 'react-dom';

import { User } from '../User';

const props = {};

describe('User Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<User {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});