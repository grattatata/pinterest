// import { createSlice } from "@reduxjs/toolkit";
// let cart = createSlice({
//   name: "cart",
//   initialState: [
//     { id: 0, name: "White and Black", count: 2 },
//     { id: 2, name: "Grey Yordan", count: 11 },
//   ],
//   reducers: {
//     increase(state, action) {
//       // state.filter((a, idx) => state[action.payload].count)
//       const a = state.filter((item) => {
//         if (item.id === action.payload) {
//           item.count += 1;
//         }
//       });
//     },
//     addItem(state, action) {
//       console.log(action.payload);
//       return [...state, action.payload];
//     },
//   },
// });

// export let { increase, addItem } = cart.actions;

// export default cart;
