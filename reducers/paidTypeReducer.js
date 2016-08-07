const paidType = (state = 'MONTH_PAID', action) => {
  switch(action.type) {
    case 'UPDATE_SALARY_TYPE':
      return action.text
    default:
      return state;
  }
}

export default paidType
