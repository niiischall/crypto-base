import ReactDOM from 'react-dom';

import { App } from '../App';

const props = {};

describe('App Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<App {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});
