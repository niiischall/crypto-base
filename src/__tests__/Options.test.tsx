import ReactDOM from 'react-dom';

import { Options } from '../options/Options';

const props = {};

describe('Options Page', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Options {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});
