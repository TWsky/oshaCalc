import { connect } from 'react-redux'
import { updateSalaryType } from '../actions'
import SalaryTypeList from '../components/SalaryTypeList'

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

const mapStateToProps = (state) => {
  return {
    oncheckedType: convertSal(state.paidType.selectedSalaryType)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ScheckClick: (sal) => {
      dispatch(updateSalaryType(convertSal(sal)))
    }
  }
}

const SelectSalaryType = connect(
  mapStateToProps,
  mapDispatchToProps
)(SalaryTypeList)

export default SelectSalaryType
