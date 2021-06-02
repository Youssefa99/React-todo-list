import React from 'react'
import PropTypes from 'prop-types'


export const Button = ({onClick}) => {
  return (
    <button className='btn'
     style={{ backgroundColor: 'green'}}
     onClick={onClick}>Add</button>
  )
}


Button.propTypes = {
  onClick: PropTypes.func,
}


export default Button