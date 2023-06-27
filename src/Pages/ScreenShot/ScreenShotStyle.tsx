import styled from "styled-components"
import { Fab, Typography } from '@mui/material';

export const Root = styled.div`
  height: 100%;
`

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  object-fit: cover;
  top: 0px;
`

export const RightCenter = styled.div`
  position: absolute;
  z-index: 60;
  top: 50vh;
  right: 0px;
  margin: 5vw;
  color: white;
  width: 30vw;
  text-align: right;
  transform: translate(0, -70%);
`

export const FlashButton = styled(Fab)`
  position: fixed!important;
  bottom: 50px;
  right: 50vw;
  width: 100px!important;
  height: 100px!important;
  transform: translate(50%, 0);
  box-shadow: 0 0 40px #f9808099!important;
  :hover {
    background: #fff!important;
    box-shadow: 0 0 0px #f98080!important;
    color: #333;
  }
`

export const MailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`

export const EmailInput = styled.input`
  background: #fff;
  border-radius: 50px!important;
  outlined: 0px!important;
  opacity: .5;
  border: 0px;
  padding: 16px 24px;
  transition: all .4s!important;
  width: 300px;
  margin-bottom: 20px;
  outline: 1px solid white;
  outline-offset: 3px;
  font-weight: 500;
  :hover {
    border: 0;
  }
  :focus {
    border: 0;
    opacity: 1;
  }
`

export const CenteredImage = styled.img`
  position: absolute;
  top: 5%;
  height: 90%;
  width: 100%;
  object-fit: contain;
  z-index: 10;
`

export const CenteredText = styled(Typography)`
  position: absolute;
  top: 50vh;
  right: 50vw;
  transform: translate(50%, -50%);
  font-weight: 500!important;
  z-index: 10;
`