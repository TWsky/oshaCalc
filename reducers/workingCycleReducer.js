const workingCycle = (state = "ORIGIN", action) => {
  switch(action.type) {
    case UPDATE_WORKING_CYCLE_TYPE:
      return action.text
    default:
      return state;
  }
}
