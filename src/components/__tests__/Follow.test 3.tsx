import ReactDOM from 'react-dom';

import { Follow } from '../Following/Follow';

const props = {};

describe('Following Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Follow {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});