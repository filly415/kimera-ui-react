import styled from 'styled-components'
import { Outlet, useNavigate } from 'react-router-dom'
import { logoUrl } from '../data/constant'
import { Zoom } from '@mui/material'

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 40px;
  z-index: 1000;
  cursor: pointer;
`

const Layout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <>
      <Zoom in={true}>
        <Logo src={logoUrl} alt={logoUrl} onClick={handleClick} />
      </Zoom>
      <Outlet />
    </>
  )
}

export default Layout;