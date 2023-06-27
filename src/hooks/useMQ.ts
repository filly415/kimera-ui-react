import { useMediaQuery, Theme } from '@mui/material'

interface Props {
  [key: string]: string | undefined | number;
  default: any,
  xs?: any,
  sm?: any,
  md?: any,
  lg?: any,
  xl?: any
}

const useMQ = (props: Props) => {
  const xs = useMediaQuery((theme: Theme) => theme.breakpoints.up('xs'));
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const xl = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));

  const breakpointsString = ['xl', 'lg', 'md', 'sm', 'xs'];
  const breakpoints = [xl, lg, md, sm, xs];

  
  for (let i = 0; i < breakpointsString.length; i++) {
    const item = breakpointsString[i];
    if (breakpoints[i] && props[item]) {
      return props[item];
    }
  }

  return props.default;
}

export default useMQ;