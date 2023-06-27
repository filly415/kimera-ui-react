import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { rootType } from '../../redux';
import { assetsBaseUrl } from '../../data/constant';

import { Root, BackgroundImage, CenteredImage, CenteredText } from './ScreenShotStyle';


const ScreenShotReadyPage = () => {
  const { id } = useParams();
  const { themes } = useSelector((state: rootType) => state.theme);
  const currentTheme = themes.find(item => item.id === id);

  
  return (
    <Root className='enter-fade'>
      <CenteredText variant='h2' className='zoomtext' color='Background'>תודה רבה!</CenteredText>

      <CenteredImage src={`${assetsBaseUrl}/images/effects/star.png`} />

      {
        currentTheme &&
        <BackgroundImage src={currentTheme.background} />
      } 
    </Root>
  )
}

export default ScreenShotReadyPage;