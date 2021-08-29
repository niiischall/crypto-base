import ReactDOM from 'react-dom';

import { LogoComponent } from '../Logo';

const props = {};

describe('Logo Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<LogoComponent {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});