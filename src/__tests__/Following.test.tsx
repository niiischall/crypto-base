import ReactDOM from 'react-dom';

import { Following } from '../pages/Home/Following';

const props = {};

describe('Following Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<Following {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});
