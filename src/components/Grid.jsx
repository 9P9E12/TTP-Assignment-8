import React from 'react'
import Cell from './Cell'

export default function Grid(props){
  return (
    <div 
    className="grid-container" 
    id="grid" 
    style={
    {'display': 'grid',
    'gridTemplateColumns': 'auto auto auto',
    'gridTemplateRows': 'auto auto auto',
    'backgroundColor': '#2196F3',
    'padding': '10px'}
    }>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
    </div>
  )
}
