import { LinearProgress, Typography } from '@mui/material';
import Spinner from 'react-spinkit';
import styled from 'styled-components';


const FullWidthContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: .7;
  position: absolute;
  z-index: 100;
`

const Centered = styled.div`
  position: fixed;
  top: 50vh;
  right: 50vw;
  transform: translate(50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
`

type Props = {
  text: string
}

export const Loading = (props: Props) => (
  <FullWidthContainer className='appear'>
    <LinearProgress />
    <Centered>
      <Spinner name="line-scale-pulse-out" />
      <Typography pl={2}>{ props.text }</Typography>
    </Centered>
  </FullWidthContainer>
)