import { connect } from 'react-redux'
import { initDateRange } from '../actions'
import DateInfoList from '../components/DateInfoList'

const mapStateToProps = (state) => {
  return {
    workDateInfo: state.dateInfo.workDateInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    diBoxOnclick: (id) => {
      console.log(id)
    }
  }
}

const ModifiedDateBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateInfoList)

export default ModifiedDateBox
