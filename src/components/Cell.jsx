import React from 'react'

export default function Cell(props){
  return (
    <div className="grid-item"
    style={
      {'backgroundColor': 'white',
        'border': '1px solid rgba(0, 0, 0, 0.8)',
        'padding': '20px',
        'fontSize': '30px',
        'textAlign': 'center'}
    }onClick={() => props.handlePress(props.id)}
    id = {props.id}
    ></div>
  )
}
