import ReactDOM from 'react-dom';

import { Popular } from '../pages/Home/Popular';

const props = {};

describe('Popular Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Popular {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});
