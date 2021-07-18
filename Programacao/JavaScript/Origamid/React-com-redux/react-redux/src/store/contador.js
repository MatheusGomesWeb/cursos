export default function contador(state = 0, action) {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    default:
      return state;
  }
}
