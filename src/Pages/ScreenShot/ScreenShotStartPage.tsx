import { useEffect, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { rootType } from '../../redux';
import { Stack, Typography, Theme, useMediaQuery, Fab, Zoom, TextField } from '@mui/material';
import { Loading } from '../../components/Loading';
import PictureContainer from '../../components/PictureContainer';
import { assetsBaseUrl } from '../../data/constant';

import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { Root, RightCenter, FlashButton, BackgroundImage, MailBox, EmailInput, CenteredImage } from './ScreenShotStyle';


const ScreenShotReadyPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string>();
  const [validity, setValidty] = useState(false);
  const { themes } = useSelector((state: rootType) => state.theme);
  const { original } = useSelector((state: rootType) => state.picture);
  const currentTheme = themes.find(item => item.id === id);
  const navigate = useNavigate();

  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  const handleSubmit = () => {
    navigate(`/screenshot-end/${id}`);
  }

  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setValidty(e.target.checkValidity());
  }

  return (
    <Root>
      {
        loading &&
        <Loading text='processing...' />
      }
      <Stack sx={{height: '100%'}} justifyContent='center' alignItems='center'>
        <PictureContainer result={!loading} />
        <CenteredImage src={original} style={{zIndex: 100}} />
      </Stack>

      <CenteredImage 
        src={`${assetsBaseUrl}/images/effects/shine.png`} 
        style={{ mixBlendMode: 'screen' }}
      />
      <CenteredImage src={`${assetsBaseUrl}/images/effects/star.png`} />


      {
        (lg && !loading) &&
        <RightCenter>
          <>
            <Typography variant='h2'>מעולה</Typography>
            <Typography variant='h5' mb={5}>
            אז עכשיו אתם יודעים איך הייתם נראים בתור דמות מהמאה ה19! מגניב לא? הוסיפו את המייל שלכם וקבלו את התמונה ממש תכף.
            </Typography>
            <MailBox> 
              <EmailInput 
                placeholder='Your email'
                onChange={handleInputEmail}
                type='email'
                required
              />
              <Button disabled={!validity} handleClick={handleSubmit}>שליחה</Button>
            </MailBox>
          </>
        </RightCenter>
      }

      {
        currentTheme &&
        <BackgroundImage src={currentTheme.background} />
      } 
    </Root>
  )
}

export default ScreenShotReadyPage;