import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import React, { useState } from 'react';
import ThemeContext from '../context/ThemeContext';

const darkTheme = {
  palette: {
    type: 'dark',
  },
}

const lightTheme = {
  palette: {
    type: 'light',
  },
}

export default function Theme(props) {
  const [ lightMode, setLightMode ] = useState();

  const theme = createMuiTheme(lightMode ? lightTheme : darkTheme);
  const toggle = () => {
    setLightMode(!lightMode);
  }

  return (
    <ThemeContext.Provider value={{
      lightMode,
      toggle
    }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        { props.children }
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
