export default function (state = [], action) {
  switch (action.type) {
    case "ITEM_SELECTED":
      return action.payload;
    // break;
    default:
  }

  return state;
}
