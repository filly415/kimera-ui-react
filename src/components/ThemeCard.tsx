import { Card, CardActionArea, CardMedia, Stack, Typography } from "@mui/material";
import { FC } from 'react'
import { useMQ } from '../hooks';
import styled from "styled-components";

type Theme = {
  image: string,
  title: string
}

type Props = {
  theme: Theme,
  handleClick: (theme: Theme) => void
}

const ThemeCard: FC<Props> = ({ theme, handleClick }) => {
  const cardHeight = useMQ({ default: '200px', xl: '300px' });
  const cardWidth = useMQ({ default: '150px', xl: '212px' });


  return (
    <Stack alignItems='center'>
      <Card sx={{ width: cardWidth }} elevation={15} className="theme-card">
        <CardActionArea onClick={() => handleClick(theme)}>
          <CardMedia sx={{ height: cardHeight }} image={theme.image} />
        </CardActionArea>
      </Card>
      <Typography variant="h5">{theme.title}</Typography>
    </Stack>
  )
}

export default ThemeCard;