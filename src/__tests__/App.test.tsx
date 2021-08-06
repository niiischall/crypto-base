import React from 'react';
import ReactDOM from 'react-dom';

import { App } from '../App';

describe('App Component', () => {
  const div = document.createElement('div');

  it('should match snapshot', () => {
    const component = ReactDOM.render(<App />, div);
    expect(component).toMatchSnapshot();
  });
});
