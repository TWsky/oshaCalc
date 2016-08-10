import { connect } from 'react-redux'
import { updateWorkingCycleType } from '../actions'
import WorkingTypeTrans from '../components/WorkingTypeTrans'

const convertTrans = (CHTtranType) => {
  switch (CHTtranType) {
    case '無變形':
      return 'NAN'
    case '兩週變形':
      return 'TwoWK'
    case '四週變形':
      return 'FourWK'
    case '八週變形':
      return 'EightWK'
    case 'NAN':
      return '無變形'
    case 'TwoWK':
      return '兩週變形'
    case 'FourWK':
      return '四週變形'
    case 'EightWK':
      return '八週變形'
  }
}

const mapStateToProps = (state) => {
  return {
    transTypes: state.transTypes,
    oncheckedType: state.selectedSalaryType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Tclick: (transType) => {
      dispatch(updateWorkingCycleType(transType))
    }
  }
}

const SelectTransType = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkingTypeTrans)

export default SelectTransType
