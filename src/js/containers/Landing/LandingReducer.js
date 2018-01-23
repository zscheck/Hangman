// const defaultState = {
//   word: '',
//   gameboard: ''
// };

// export default function LandingReducer(state = defaultState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case 'WORD': {
//       return {
//         ...state,
//         word: payload,
//         gameboard: payload.replace(/[A-Z]/g, ' __ ')
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// }
