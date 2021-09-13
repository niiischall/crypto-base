import ReactDOM from 'react-dom';

import { Navigation } from '../Navigation';

describe('Navigation Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Navigation />, div);
    expect(component).toMatchSnapshot();
  });
});
