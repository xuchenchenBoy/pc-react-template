/**
 * Created by Administrator on 2017/3/2.
 */
const handleReducers = (initialState, handleReduces) => (state = initialState, action) => {
  const reduceFn = handleReduces[action.type];
  if (!reduceFn) return state;
  return { ...state, ...reduceFn(state, action) };
};

export default handleReducers;
