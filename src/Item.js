import React from 'react'

const stylesForLi = {
  color: 'red',
  border: '1px solid black',
  padding: '10px',
  width: '200px',
  margin: '5px',
}

const Item = (props) => {
  return (
    <li style={stylesForLi}>{props.name}</li>
  )
}

export {Item}