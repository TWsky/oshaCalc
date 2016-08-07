import { connect } from 'react-redux'
import { updateSalaryType } from '../actions'
import SalaryTypeList from '../components/SalaryTypeList'

const mapStateToProps = (state) => {
  return {
    salaryType: state.salaryType,
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

const selectSalaryType = connect(
  mapStateToProps,
  mapDispatchToProps
)(SalaryTypeList)

export default selectSalaryType
