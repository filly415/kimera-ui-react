import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Provider } from 'react-redux';
import store from './redux';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'kimera-text',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });

  // theme.typography.h1 = {
  //   fontWeight: 500
  // }
  // theme.typography.h2 = {
  //   fontWeight: 500
  // }
  // theme.typography.h3 = {
  //   fontWeight: 500
  // }

  // theme.typography.h4 = {
  //   fontWeight: 300
  // }
  // theme.typography.h5 = {
  //   fontWeight: 300
  // }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </div>
  )
}

export default App
