import { createContext } from 'react';

const ThemeContext = createContext({
  lightMode: true,
  toggle: () => {}
});

export default ThemeContext;