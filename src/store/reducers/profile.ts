import * as types from '../actions/actionTypes';

const initialState = {
  error: '',
};

/**
 * State management for data related to profile
 * @param {Object} state - The current (or initial) state
 * @param {Object} action - An incoming action
 */
export default function profile(state: any = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
