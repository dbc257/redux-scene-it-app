import { Container, Fab } from '@material-ui/core';
import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

function App() {
  const themeContext = useContext(ThemeContext);

  const handleToggle = () => {
    themeContext.toggle()
  }

  return (
    <Container>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
      { themeContext.lightMode ? (      
      <Fab
        color='primary'
        style={{ position: 'fixed', bottom: '20px', left: '20px', fontSize: '30px' }}
        onClick={handleToggle}
      >🌜</Fab>
      ) : (      
      <Fab
        color='primary'
        style={{ position: 'fixed', bottom: '20px', left: '20px', fontSize: '30px' }}
        onClick={handleToggle}
      >🌞</Fab>) }
    </Container>
  );
}

export default App;
