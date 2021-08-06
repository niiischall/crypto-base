import ReactDOM from 'react-dom';

import { Options } from '../options/Options';

describe('Options Page', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Options />, div);
    expect(component).toMatchSnapshot();
  });
});
