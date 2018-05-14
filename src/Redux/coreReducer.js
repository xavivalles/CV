const initialState = {
  isVisible: true,
};

export const coreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CONTENT':
      return {
        ...state,
        isVisible: true,
      }

    case 'HIDE_CONTENT':
      return {
        ...state,
        isVisible: false,
      }

    default:
      return state;
  }
};

// actions
export const hideContent = () => ({
  type: 'HIDE_CONTENT',
});

export const showContent = () => ({
  type: 'SHOW_CONTENT',
});
