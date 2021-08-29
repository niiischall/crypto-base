import ReactDOM from 'react-dom';

import { SearchInput } from '../SearchInput';

const props = {};

describe('SearchInput Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<SearchInput {...props} />, div);
    expect(component).toMatchSnapshot();
  });
});