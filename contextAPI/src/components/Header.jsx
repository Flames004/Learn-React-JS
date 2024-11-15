import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {
    const username = useContext(DataContext)
    console.log("Header:", username)
  return (
    <div>
        <h1>Header</h1>
    </div>
  )
}

export default Header