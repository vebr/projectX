import Store from '../store/categories';

export const initialState = Store;

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORIES_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'CATEGORIES_REPLACE': {
      let categories = [];
      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        categories = action.data.map(item => ({
          id: item.id,
          title: item.title,
        }));
      }

      return {
        ...state,
        error: null,
        loading: false,
        categories,
      };
    }
    default:
      return state;
  }
}
