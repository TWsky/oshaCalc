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

  let salarySum = 0
  let overTimeSum = 0

  const popItem = (stateItem) => {
    return stateItem.id !== action.id
  }

  switch (action.type) {
    case 'UPDATE_SALARY_LIST':
      state.salaryList.map(sl_Obj => {
        sl_Obj.id === action.SL_Object.id
        ? salarySum += +action.SL_Object.volume
        : salarySum += +sl_Obj.volume
      })
      return Object.assign({}, state, {
        salaryList: state.salaryList.map(sl_Obj => {
          return sl_Obj.id === action.SL_Object.id
          ? { ...sl_Obj, label: action.SL_Object.label, volume: action.SL_Object.volume}
          : sl_Obj
        }),
        salarySum: salarySum
      })
    case 'UPDATE_OVERTIME_LIST':
      state.overTimeList.map(ot_Obj => {
        ot_Obj.id === action.OT_Object.id
        ? overTimeSum += +action.OT_Object.volume
        : overTimeSum += +ot_Obj.volume
      })
      return Object.assign({}, state, {
        overTimeList: state.overTimeList.map(ot_Obj => {
          return ot_Obj.id === action.OT_Object.id
          ? { ...ot_Obj, label: action.OT_Object.label, volume: action.OT_Object.volume}
          : ot_Obj
        }),
        overTimeSum: overTimeSum
      })
    case 'PUSH_SALARY_OBJ':
      return Object.assign({}, state, {
        salaryList: [ ...state.salaryList, action.newSL_Obj]
      })
    case 'PUSH_OVERTIME_OBJ':
      return Object.assign({}, state, {
        overTimeList: [ ...state.overTimeList, action.newOT_Obj]
      })
    case 'POP_SALARY_LIST':
      state.salaryList.map(sl_Obj => {
        sl_Obj.id === action.id
        ? salarySum = salarySum
        : salarySum += +sl_Obj.volume
      })
      return Object.assign({}, state, {
        salarySum: salarySum,
        salaryList: state.salaryList.filter(popItem)
      })
    case 'POP_OVERTIME_LIST':
      state.overTimeList.map(ot_Obj => {
        ot_Obj.id === action.id
        ? overTimeSum = overTimeSum
        : overTimeSum += +ot_Obj.volume
      })
      return Object.assign({}, state, {
        overTimeSum: overTimeSum,
        overTimeList: state.overTimeList.filter(popItem)
      })
    default:
      return state
  }
}

export default wageSum
