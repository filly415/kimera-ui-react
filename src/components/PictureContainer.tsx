import styled from "styled-components"
import { assetsBaseUrl } from "../data/constant"
import { Fade } from '@mui/material';

const Image = styled.img`
  height: 95%;
  width: 100%;
  object-fit: contain;
  z-index: 50;
`

type Props = {
  result?: boolean
}

const CameraView = (props: Props) => {
  return (
    <Fade in={true}>
      <Image 
        src={
          props.result ?
          `${assetsBaseUrl}/images/result.png` :
          `${assetsBaseUrl}/images/camera-view.png`
        } 
        alt="camera-view" 
      />
    </Fade>
  )
}

export default CameraView;