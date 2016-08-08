import { connect } from 'react-redux'
import { updateSalaryType } from '../actions'
import SalaryTypeList from '../components/SalaryTypeList'


const mapStateToProps = (state) => {
  return {
    salaryTypes: state.salaryTypes,
    oncheckedType: state.selectedSalaryType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (salaryT) => {
      dispatch(updateSalaryType(salaryT))
    }
  }
}

const SelectSalaryType = connect(
  mapStateToProps,
  mapDispatchToProps
)(SalaryTypeList)

export default SelectSalaryType
