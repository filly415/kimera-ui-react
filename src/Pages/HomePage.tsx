import styled from 'styled-components'
import { assetsBaseUrl } from '../data/constant'
import { Typography, Zoom, useMediaQuery, Theme } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LargeButton from '../components/Button';

const imgUrl = `${assetsBaseUrl}/images/development/Home.png`

const Root = styled.div`
  background-image: url(${imgUrl});
  height: 100%;
  background-size: cover;
`

const CenterBox = styled.div`
  position: absolute;
  transform: translate(50%, -50%);
  right: 50vw;
  top: 50vh;
  color: white;
  text-align: center;
  width: 100%;
`

const BlackBoard = styled.div`
  background: #000;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  opacity: .7;
  animation-name: black-cover;
  animation-duration: .6s;
`

const HomePage = () => {
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  const breakpointsMd = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <Root>
      <BlackBoard />
      <CenterBox>
        <Zoom 
          in={fade} 
          style={{ transitionDelay: fade ? '300ms' : '0ms' }} 
          timeout={{ enter: 400, exit: 300 }}
        >
          <Typography 
            gutterBottom 
            variant={breakpointsMd ? 'h1' : 'h3'}
          >מה שבא לכם להיות</Typography>
        </Zoom>
        <Zoom 
          in={fade} 
          style={{ transitionDelay: fade ? '500ms' : '0ms' }}
          timeout={{ enter: 400 }}
        >
          <div>
            <LargeButton 
              handleClick={() => navigate('/landing')}
            >
              מתחילים כאן
            </LargeButton>
          </div>
        </Zoom>
      </CenterBox>
    </Root>
  )
}

export default HomePage;