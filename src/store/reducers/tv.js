// import { actionTvTypes } from "../actions/type";

// const initialState = {
//   //
//   tvList: [],
//   loading: false,
//   error: null,
// };

// const reducers = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case actionTvTypes.FETCH_TV_REQUEST: {
//       state.loading = true;
//       return { ...state };
//     }
//     case actionTvTypes.FETCH_TV_SUCCESS: {
//       state.loading = false;
//       state.err = null;
//       state.tvList = payload;
//       return { ...state };
//     }
//     case actionTvTypes.FETCH_TV_FAILURE: {
//       state.loading = true;
//       state.err = payload;
//       return { ...state };
//     }
//     default:
//       return { ...state };
//   }
// };

// export default reducers;
