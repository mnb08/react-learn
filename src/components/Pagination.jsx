import React from 'react'
import shortid from "shortid";


export const Pagination = ({active, handleClick, ind}) => {
  return (
    <button
        key={shortid.generate()}
        className={active==ind+1 ? 'active' : ''}
        onClick = { 
            () => handleClick(ind+1) }
        >{ind + 1}
    </button>
  )
}
