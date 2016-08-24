import { connect } from 'react-redux'
import { initDateRange, updateShowDateInfoBoxId, updateDateInfoArr } from '../actions'
import DateInfoList from '../components/DateInfoList'

const mapStateToProps = (state) => {
  return {
    workDateInfo: state.dateInfo.workDateInfo,
    curEditId: state.dateInfo.curEditId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDateInfo: (id) => {
      dispatch(updateShowDateInfoBoxId(id))
    },
    updateDateInfo: (id, arrObj) => {
      dispatch(updateDateInfoArr(id, arrObj))
    }
  }
}

const ModifiedDateBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateInfoList)

export default ModifiedDateBox
