import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { rootType } from '../../redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Stack, Typography, Theme, useMediaQuery, Fab, Zoom } from '@mui/material';
import Countedown from '../../components/Countdown';
import CameraView from '../../components/CameraView';
import { Loading } from '../../components/Loading';

import FlashOnIcon from '@mui/icons-material/FlashOn';
import Button from '../../components/Button';
import { Root, RightCenter, FlashButton, BackgroundImage, CenteredImage } from './ScreenShotStyle';
import checkCameraAvailability from '../../utility/checkCameraAvailability';
import ConfirmDialog from '../../components/ConfirmDialog';
import { assetsBaseUrl } from '../../data/constant';

const ScreenShotReadyPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>();
  const { themes } = useSelector((state: rootType) => state.theme);
  const { original } = useSelector((state: rootType) => state.picture); 
  const currentTheme = themes.find(item => item.id === id);
  const navigate = useNavigate();
  
  const [started, setStarted] = useState(false);
  const [shot, setShot] = useState(false);
  const [cameraValidity, setCameraValidity] = useState(null);

  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const checkCamera = async () => {
    setLoading(true);
    setCameraValidity(null);
    let validity: any;
    validity = await checkCameraAvailability();
    setCameraValidity(validity);
    setLoading(false);
  }

  useEffect(() => {
    checkCamera();
  }, []);

  useMemo(() => {
    if (cameraValidity === false) {
      console.log('Check your camera connection and try again!');
    }
  }, [cameraValidity]);

  const handleShot = () => {
    setShot(true);
  }


  return (
    <Root className='enter-fade'>
      {
        loading &&
        <Loading text='connecting to your camera...' />
      }

      <Stack sx={{height: '100%'}} justifyContent='center' alignItems='center'>
        {
          !lg &&
          <Countedown
            start={started}
            centered
            onFinish={handleShot}
          />
        }

        <CameraView 
          start={shot} 
          onFinish={() => navigate(`/screenshot-start/${id}`)} 
        />
        <CenteredImage 
          src={`${assetsBaseUrl}/images/effects/shine.png`}
          style={{ mixBlendMode: 'screen' }}
        />
      </Stack>

      <ConfirmDialog 
        show={cameraValidity === false}
        title='Failed'
        message="Couldn't connect to your camera"
        onConfirm={checkCamera}
        onCancel={() => navigate('/landing')}
        confirmButtonText='Try Again!'
        cancelButtonText='Cancel'
      />

      {
        lg ?
        <RightCenter>
          {
            started ? 
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <Countedown start={started} onFinish={handleShot} />
            </div> :
            <>
              <Typography variant='h5' mb={5}>
                לפי הנתונים שלי אתם נראים מדהים. ברגע שאתם מוכנים, לחצו על הכפתור.
              </Typography>
              <Button handleClick={() => setStarted(true)}>אנחנו מוכנים</Button>
            </>
          }
        </RightCenter>
         :
        <FlashButton size='large' color='error' onClick={() => setStarted(true)}>
          <FlashOnIcon sx={{width: 40, height: 40}} />
        </FlashButton>
      }

      {
        currentTheme &&
        <BackgroundImage src={currentTheme.background} />
      } 
    </Root>
  )
}

export default ScreenShotReadyPage;