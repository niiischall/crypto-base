import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { store } from '../../mocks/mock';
import * as ReactReduxHooks from '../../services/react-redux-hooks';

import { Popular } from '../Home/Popular';

const props = {
  switchTab: jest.fn(),
};

const setup = () => {
  const component = mount(
    <Provider store={store}>
      <Popular {...props} />
    </Provider>,
  );
  return {
    component,
  };
};

describe('Popular Component', () => {
  const div = document.createElement('div');

  let enzymeWrapper: any;
  const { component } = setup();

  beforeEach(() => {
    /* mocking useSelector on our mock store */
    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation((state) => store.getState());
    /* mocking useDispatch on our mock store  */
    jest
      .spyOn(ReactReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    /* shallow rendering */
    enzymeWrapper = component;
  });

  test('should match snapshot', () => {
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
