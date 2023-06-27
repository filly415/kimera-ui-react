import { useEffect, useState } from 'react';
import { assetsBaseUrl } from '../data/constant'; 
import styled from 'styled-components';

type Props = {
  start: boolean,
  centered?: boolean,
  onFinish: () => void
}

const Centered = styled.img`
  position: absolute;
  top: 50vh;
  right: 50vw;
  transform: translate(50%, -50%);
  z-index: 60;
`

const RightAligned = styled.img`
  z-index: 20;
`

const Countdown = (props: Props) => {
  const [count, setCount] = useState(0);

  const images = [
    `${assetsBaseUrl}/images/counter/1.png`,
    `${assetsBaseUrl}/images/counter/2.png`,
    `${assetsBaseUrl}/images/counter/3.png`
  ]

  useEffect(() => {
    const handleFinish = () => {
      setCount(0);
      props.onFinish();
    }

    if (props.start) {
      setCount(3);
      setTimeout(() => setCount(2), 1000);
      setTimeout(() => setCount(1), 2000);
      setTimeout(handleFinish, 3000);
    }
  }, [props.start]);

  return (
    <>
      {
        count > 0 &&
        props.centered ?
        <Centered className='countdown' src={images[count-1]} /> :
        <RightAligned className='countdown' src={images[count-1]} />
      }
    </>
  );
}


export default Countdown;