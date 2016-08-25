const initialState = {
  salaryList: [
    {
      label: '薪金',
      volume: 0,
      id: 0
    }
  ],
  salarySum: 0,
  overTimeList: [
    {
      label: '一般加班費',
      volume: 0,
      id: 0
    }
  ],
  overTimeSum: 0
}

const wageSum = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SALARY_LIST':
      return state.salaryList.map(sl_Obj => {
        return sl_Obj.id === action.SL_Object.id
        ? { ...sl_Obj, label: action.SL_Object.label, volume: action.SL_Object.volume}
        : sl_Obj
      })
    case 'UPDATE_OVERTIME_LIST':
      return state.overTimeList.map(ot_Obj => {
        return ot_Obj.id === action.OT_Object.id
        ? { ...ot_Obj, label: action.OT_Object.label, volume: action.OT_Object.volume}
        : ot_Obj
      })
    default:
      return state
  }
}

export default wageSum
