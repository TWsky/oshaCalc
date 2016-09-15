import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Button, Glyphicon } from 'react-bootstrap'

const ItemListSum = ({title, itemList, sum, listChange, listPush, listPop}) => (
  <div className={title == "該時段薪資" ? "col-xs-offset-1 col-xs-5" : "col-xs-5"} style={{height: '500px'}}>
    <h3 style={{textAlign: 'center'}}>{title}</h3>
    <div style={{margin: '0 auto', width: '360px', height: '350px'}}>
      <table style={{fontSize: '20px', textAlign: 'center'}}>
        <thead>
          <tr>
            <th></th>
            <th>項目</th>
            <th>金額</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item, ids) =>
            <tr key={ids}>
              <td>
                <Button bsSize="xsmall" onClick={() => listPop(item.id)}>
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
    <div style={{ margin: '40px auto 0', width: '270px' }}>
      <input type="text" value={sum} /><span style={{ fontSize: '20px', margin: '5px' }}>NTD</span>
    </div>
  </div>
)

export default ItemListSum
