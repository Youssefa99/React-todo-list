import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({onAdd}) => {


  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button onClick={onAdd}></Button>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
