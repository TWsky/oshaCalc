const initialState = {
  salaryTypes: ["MONTH_PAID", "DAY_PAID", "HOUR_PAID"],
  selectedSalaryType: 'MONTH_PAID'
}

const paidType = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SALARY_TYPE':
      return Object.assign({}, state, {
        selectedSalaryType: action.text
      })
    default:
      return state
  }
}

export default paidType
