import { connect } from 'react-redux'
import React, { PropTypes } from 'react';
import { updateSalaryList, updateOverTimeList } from '../actions'
import ItemListSum from '../components/ItemListSum'

/* AppUpSalary */
const sl_mapStateToProps = (state) => {
  return {
    title: '該時段薪資',
    itemList: state.wageSum.salaryList,
    sum: state.wageSum.salarySum
  }
}

const sl_mapDispatchToProps = (dispatch) => {
  return {
    listChange: (item) => {
      dispatch(updateSalaryList(item))
    }
  }
}


const AddUpSalary = connect(
  sl_mapStateToProps,
  sl_mapDispatchToProps
)(ItemListSum)

 /* AddUpOverTime */
const ot_mapStateToProps = (state) => {
  return {
    title: '加班費',
    itemList: state.wageSum.overTimeList,
    sum: state.wageSum.overTimeSum
  }
}

const ot_mapDispatchToProps = (dispatch) => {
  return {
    listChange: (item) => {
      dispatch(updateOverTimeList(item))
    }
  }
}

const AddUpOverTime = connect(
  ot_mapStateToProps,
  ot_mapDispatchToProps
)(ItemListSum)

/* AddUpWage */
const AddUpWage = (state) => (
  <div>
    <AddUpSalary />
    <AddUpOverTime />
  </div>
)

export default AddUpWage
