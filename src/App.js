import './App.css';
import { Container} from '@material-ui/core';
import Favorites from './components/pages/Favorites';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  

  return (
    <Container>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={Favorites} />
        <Route>
          <Redirect to='/' />
        </Route>
      </BrowserRouter>
      
    </Container>
  );
}

export default App;
