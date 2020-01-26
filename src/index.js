import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import theme from './app/settings/theme';
import { Provider } from 'react-redux';
import { Store } from './app/store/Store';

const store = Store.ConfigureStore();

const Wrapper = ({store, theme}) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
)


ReactDOM.render(
  <Wrapper store={store} theme={theme} />, document.getElementById('root'));

serviceWorker.unregister();
