import { connect } from 'react-redux'
import { updateWorkingCycleType } from '../actions'
import RadioQueryForm from '../components/RadioQueryForm'

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

const mapStateToProps = (state, ownProps) => {
  return {
    title: ownProps.data.title,
    buttonlist: ownProps.data.buttonlist,
    resultVal: ownProps.data.resultVal,
    oncheckedType: convertTrans(state.workingCycle.selectedTransType)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    btnClick: (transType) => {
      dispatch(updateWorkingCycleType(convertTrans(transType)))
    }
  }
}

const SelectTransType = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioQueryForm)

export default SelectTransType
