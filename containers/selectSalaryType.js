import { connect } from 'react-redux'
import { updateSalaryType } from '../actions'
import RadioQueryForm from '../components/RadioQueryForm'

const convertSal = (CHTSalaryType) => {
  switch (CHTSalaryType) {
    case '月薪制':
      return 'MONTH_PAID'
    case '日薪制':
      return 'DAY_PAID'
    case '時薪制':
      return 'HOUR_PAID'
    case 'MONTH_PAID':
      return '月薪制'
    case 'DAY_PAID':
      return '日薪制'
    case 'HOUR_PAID':
      return '時薪制'
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: ownProps.data.title,
    buttonlist: ownProps.data.buttonlist,
    resultVal: ownProps.data.resultVal,
    oncheckedType: convertSal(state.paidType.selectedSalaryType)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    btnClick: (sal) => {
      dispatch(updateSalaryType(convertSal(sal)))
    }
  }
}

const SelectSalaryType = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioQueryForm)

export default SelectSalaryType
