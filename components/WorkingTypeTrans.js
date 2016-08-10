import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TransButton from './TransButton'

const WorkingTypeTrans = ({ transTypes, oncheckedType, Tclick}) => (
    <div>
      <span>
        {transTypes.map((transType, id) =>
          <TransButton
            key={id}
            text={transType}
            onChecked={transType === oncheckedType}
            onClick={() => Tclick(transType)}
          />
        )}
      </span>
      <h3>變形工時：{oncheckedType}</h3>
    </div>
)

WorkingTypeTrans.propTypes = {
  transTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  oncheckedType: PropTypes.string.isRequired,
  Tclick: PropTypes.func.isRequired
}

export default WorkingTypeTrans
