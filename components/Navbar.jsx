import React from 'react'
import { Menu } from 'semantic-ui-react'
import { logo } from './constants/Constants'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <Menu borderless fixed='top'>
      <Menu.Item>
                <img src={logo} alt="logo" style={{ width: 150 }} />
            </Menu.Item>
        <Menu.Item  name='Home' as={Link} to="/" />
        <Menu.Item name='Recipes' as={Link} to="/recipes" /> 
      </Menu>
    </div>
  )
}

export default Navbar;