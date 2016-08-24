/*
 * action creators
 */

export const updateSalaryType = (text) => {
  return {
    type: 'UPDATE_SALARY_TYPE',
    text: text
  }
}

export const updateWorkingCycleType = (text) => {
  return {
    type: 'UPDATE_WORKING_CYCLE_TYPE',
    text: text
  }
}

export const initDateRange = (startDate, endDate) => {
  return {
    type: 'INIT_DATE_RANGE',
    startDate: startDate,
    endDate: endDate
  }
}

export const updateShowDateInfoBoxId = (id) => {
  return {
    type: 'UPDATE_DATEINFOBOX_ID',
    id: id
  }
}

export const updateDateInfoArr = (id, dateInfoObj) => {
  return {
    type: 'UPDATE_DATEINFO_ARRAY',
    id: id,
    dateInfoObj: dateInfoObj
  }
}
