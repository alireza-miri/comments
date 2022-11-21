import { loading, success, failed } from "../constansts";

export const posts = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case loading:
      return payload;
    case success:
      return payload;
    case failed:
      return payload;
    case "changeTitle":
      return payload;
    default:
      return state;
  }
};

// export const changeNumber = (state = 0, { type, payload }) => {
//   switch (type) {
//     case "changeNumber":
//       return payload;
//     default:
//       return state;
//   }
// };


