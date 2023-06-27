import styled from "styled-components"
import Webcam from "react-webcam";
import { useMQ } from "../hooks";
import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { setOriginal } from '../redux/reducers/picture';

const Image = styled.img`
  height: 95%;
  width: 100%;
  object-fit: contain;
  z-index: 30;
`

type Props = {
  start: boolean,
  onFinish: () => void
}


const CameraView = (props: Props) => {
  const innerHeight = window.innerHeight;
  const innerWidth = window.innerWidth;
  const cameraRef = useRef<any>(null);
  const dispatch = useDispatch();


  if (props.start) {
    const image = cameraRef.current.getScreenshot();
    dispatch(setOriginal(image));
    props.onFinish();
  }

  const width = useMQ({
    default: innerWidth * 0.9,
    sm: innerWidth * 0.7,
    md: innerWidth * 0.5,
    lg: innerWidth * 0.4,
    xl: innerWidth * 0.3
  });
  const height = width / 2 * 3;

  const videoConstraints = {
    width,
    height,
    facingMode: "user"
  };
  return (
    // <Fade in={true}>
      <Webcam  
        audio={false}
        style={{ zIndex: 100 }}
        ref={cameraRef}
        screenshotFormat="image/jpeg"
        width={width}
        forceScreenshotSourceSize={true}
        height={height}
        videoConstraints={videoConstraints}
      />
    // </Fade>
  )
}

export default CameraView;