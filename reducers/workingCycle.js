import initialState from './initState'

const workingCycle = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_WORKING_CYCLE_TYPE':
      return Object.assign({}, state, {
        selectedTransType: action.text
      })
    default:
      return state;
  }
}

export default workingCycle
