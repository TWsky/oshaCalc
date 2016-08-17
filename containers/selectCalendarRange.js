import { connect } from 'react-redux'
import { initDateRange } from '../actions'
import ResultCalendar from '../components/Calendar'

const mapStateToProps = (state, ownProps) => {
  return {
    title: '3.選擇對應日期',
    content: ownProps.data.content,
    label: ownProps.data.label,
    startDate: state.dateInfo.startDate,
    endDate: state.dateInfo.endDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStandaloneSelect: (value) => {
      dispatch(initDateRange(value[0].format('YYYY-MM-DD'), value[1].format('YYYY-MM-DD')))
    }
  }
}

const SelectCalendarRange = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultCalendar)

export default SelectCalendarRange
