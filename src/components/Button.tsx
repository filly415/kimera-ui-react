import { Button } from "@mui/material"
import styled from "styled-components"
import { ReactElement, ReactNode } from 'react';


const StyledButton = styled(Button)`
  width: 200px;
  height: 70px;
  border-radius: 20px!important;
  font-size: 25px!important;
  box-shadow: 0 0 40px #f9808099!important;
  background: #FB0A49!important;
  :hover {
    background: #fff!important;
    box-shadow: 0 0 0px #f98080!important;
    color: #333;
  }
`

interface Props {
  children: ReactNode,
  icon?: ReactElement,
  handleClick?: () => void,
  disabled?: boolean 
} 

const LargerButton = (props: Props) => {
  return (
    <StyledButton
      color="error"
      variant="contained"
      endIcon={props.icon}
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      { props.children }
    </StyledButton>
  )
}

export default LargerButton;