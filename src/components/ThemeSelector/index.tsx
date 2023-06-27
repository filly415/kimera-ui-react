import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ThemeCard from '../ThemeCard';
import { useSelector, useDispatch } from 'react-redux'; 
import { selectTheme } from '../../redux/reducers/theme';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1500 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1500, min: 1000 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1000, min: 800 },
    items: 4
  },
  small_table: {
    breakpoint: { max: 800, min: 500 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 500, min: 300 },
    items: 2
  },
  xs: {
    breakpoint: { max: 300, min: 200 },
    items: 1
  }
}

type Theme = {
  image: string,
  title: string
}

interface StatePros {
  theme: {
    themes: [Theme],
  }
}

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const { themes } = useSelector((state: StatePros) => state.theme);

  const handleClick = (theme: Theme) => {
    dispatch(selectTheme(theme));
  }

  return (
    <Carousel
      responsive={responsive}
      keyBoardControl={true}
      className=''
      infinite
    >
      {
        themes.map((item, i) => (
          <ThemeCard key={i} theme={item} handleClick={handleClick} />
        ))
      }
    </Carousel>
  )
}

export default ThemeSelector;