import styled from 'styled-components';
import FlashButton from '../components/Button';
import { Button, Container, Stack, Typography, useMediaQuery, Theme, Fade } from '@mui/material';
import { useEffect, useState } from 'react';
import ThemeSelector from '../components/ThemeSelector';
import { useMQ } from '../hooks'
import { useSelector } from 'react-redux';

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useNavigate } from 'react-router-dom';


const Root = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-color: #181818;
  text-align: right;
  color: white;
  transition: background-image .3s;
`
const BottomContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
`

const ThemeContainer = styled.div`
  position: absolute;
  width: 100%;
  padding-bottom: 10px;
  right: 0px;
  bottom: 0px;
`

interface Store {
  theme: {
    themes: any,
    currentTheme: object
  }
}


const LandingPage = () => {
  const navigate = useNavigate();
  const { currentTheme } = useSelector((state: any) => state.theme);

  // transition

  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
  }, [currentTheme]);

  useEffect(() => {
    if(!animate) {
      setAnimate(true);
    }
  }, [animate]);


  // some responsive logic for mobile version

  const backgroundSize = useMQ({ default: 'cover', md: 'contain' });
  const backgroundPosition = useMQ({ default: 'center', md: 'right top' });
  const titleVariant = useMQ({ default: 'h5', xs: 'h4', md: 'h3', xl: 'h1' });
  const descriptionVariant = useMQ({ default: 'subheading', xs: 'h5'});
  const textAlign = useMQ({ default: 'center', sm: 'right' });
  const responsiveWidth = useMQ({ default: 'auto', sm: '400px', md: '700px' });
  const responsivePadding = useMQ({ default: '70px', xl: '100px' });

  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));


  const handleShutter = () => {
    navigate(`/screenshot-ready/${currentTheme.id}`);
  }


  // styles for components

  const rootStyle = {
    backgroundSize,
    backgroundPosition,
    backgroundImage: `url(${currentTheme.background})`,
  }

  const descriptionStyle = {
    width: responsiveWidth,
    background: md ? 'none' : '#00000099',
    borderRadius: '20px',
    padding: '12px 20px',
    margin: 10,
    zIndex: 100
  }

  const layoutCSS = {
    height: '100%',
    boxSizing: 'border-box',
    paddingTop: responsivePadding
  }

  return (
    <Root style={rootStyle} className='enter-fade'>
      <Stack justifyContent='space-between' py={4} sx={layoutCSS}>
        <div style={descriptionStyle}>
          <Fade in={true} timeout={{ enter: 300 }} key={currentTheme.background}>
            <Typography 
              variant={titleVariant}
              textAlign={textAlign}
            >
              { currentTheme.title }
            </Typography>
          </Fade>

          <Fade in={true} timeout={{ enter: 300 }} key={currentTheme.title}>
            <Typography 
              variant={descriptionVariant} 
              mb={4}
              fontWeight='bold' 
              gutterBottom
              textAlign={textAlign}
            >
              { currentTheme.description }
            </Typography>
          </Fade>
          {
            sm &&
            <FlashButton
              handleClick={handleShutter}
            >
              בחירה
            </FlashButton>
          }
        </div>
        <ThemeContainer>
          <Container>
            <ThemeSelector />
            {
              !sm &&
              <Button 
                size='large' 
                variant='contained' 
                color='error' 
                fullWidth
                onClick={handleShutter}
              >בחירה</Button>
            }
          </Container>
        </ThemeContainer>
      </Stack>
    </Root>
  )
}

export default LandingPage;