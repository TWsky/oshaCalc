import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Button, Glyphicon } from 'react-bootstrap'

const ItemListSum = ({title, itemList, sum, listChange, listPush}) => (
  <div className="col-xs-offset-1 col-xs-10" style={{marginBottom: '6%'}}>
    <h3>{title}</h3>
    <div>
      <table className="col-xs-3" style={{fontSize: '20px', textAlign: 'center'}}>
        <thead>
          <tr>
            <th></th>
            <th>項目</th>
            <th>金額</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item) =>
            <tr key={item.id}>
              <td>
                <Button bsSize="xsmall" onClick={() => console.log(itemList.length)}>
                  <Glyphicon glyph="minus"/>
                </Button>
              </td>
              <td>
                <input
                  type="text"
                  value={item.label}
                  style={{width: '150px'}}
                  onChange={(e) => listChange({...item, label: e.target.value})}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.volume}
                  style={{width: '100px'}}
                  onChange={(e) => listChange({...item, volume: e.target.value})}
                />
              </td>
              <td>
                <Button bsSize="xsmall" onClick={() => listPush(itemList.length, itemList)}>
                  <Glyphicon glyph="plus"/>
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    <div className="col-xs-offset-3 col-xs-4" style={{marginTop: '5%'}}>
      <input type="text" value={sum} /><span style={{ fontSize: '20px', margin: '5px' }}>NTD</span>
    </div>
  </div>
)

export default ItemListSum
