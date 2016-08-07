/*
 * action creators
 */

export const updateSalaryType = (text) => {
  return {
    type: UPDATE_SALARY_TYPE,
    text: text
  }
}

export const updateWorkingCycleType = (text) => {
  return {
    type: UPDATE_WORKING_CYCLE_TYPE,
    text: text
  }
}
