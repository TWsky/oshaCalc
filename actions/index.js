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

export const updateSalaryList = (SL_Object) => {
  return {
    type: 'UPDATE_SALARY_LIST',
    SL_Object: SL_Object
  }
}

export const updateOverTimeList = (OT_Object) => {
  return {
    type: 'UPDATE_OVERTIME_LIST',
    OT_Object: OT_Object
  }
}

export const pushSalaryList = (newSL_Obj) => {
  return {
    type: 'PUSH_SALARY_OBJ',
    newSL_Obj: newSL_Obj
  }
}

export const pushOverTimeList = (newOT_Obj) => {
  return {
    type: 'PUSH_OVERTIME_OBJ',
    newOT_Obj: newOT_Obj
  }
}

export const popSalaryList = (id) => {
  return {
    type: 'POP_SALARY_LIST',
    id: id
  }
}

export const popOverTimeList = (id) => {
  return {
    type: 'POP_OVERTIME_LIST',
    id: id
  }
}
