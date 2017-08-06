import 'babel-polyfill';

import {h, render} from 'preact';
import App from '../src'

render(<App />, document.body, document.querySelector('#app'));

if (process && process.env.NODE_ENV !== 'production') {
  require('preact/devtools');
}
