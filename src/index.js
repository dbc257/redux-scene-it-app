import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Theme from './components/Theme';
import ThemeContext from './components/context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContext.Provider value={false}>
        <Theme>
          <App />
        </Theme>
      </ThemeContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
