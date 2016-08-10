import { connect } from 'react-redux'
import { updateSalaryType } from '../actions'
import SalaryTypeList from '../components/SalaryTypeList'


const mapStateToProps = (state) => {
  return {
    salaryTypes: state.paidType.salaryTypes,
    oncheckedType: state.paidType.selectedSalaryType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ScheckClick: (salaryT) => {
      dispatch(updateSalaryType(salaryT))
    }
  }
}

const SelectSalaryType = connect(
  mapStateToProps,
  mapDispatchToProps
)(SalaryTypeList)

export default SelectSalaryType
