import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { store } from '../../mocks/mock';
import * as ReactReduxHooks from '../../services/react-redux-hooks';

import Follow from '../Following/Follow';

const setup = () => {
  const component = mount(
    <Provider store={store}>
      <Follow />
    </Provider>,
  );
  return {
    component,
  };
};

describe('Follow Component', () => {
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

  it('should match snapshot', () => {
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
