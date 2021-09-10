import ReactDOM from 'react-dom';

import { Unfollow } from '../Following/Unfollow';

const props = {};

describe('Unfollow Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Unfollow {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});