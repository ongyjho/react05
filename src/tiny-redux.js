export const createStore = (reducer) => {
  let store;
  const getState = () => ({ ...store });

  const listeners = new Set();
  const subscribe = (fn) => listeners.add(fn);
  const publish = () => listeners.forEach((listener) => listener());

  const dispatch = (action) => {
    store = reducer(store, action);
    publish();
  };
  return { getState, dispatch, subscribe };
};
