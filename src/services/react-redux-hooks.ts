import {
  useSelector as originalUseSelector,
  useDispatch as originalUseDispatch,
} from 'react-redux';

export const useSelector: any = (state: any) => originalUseSelector(state);
export const useDispatch: any = () => originalUseDispatch();
