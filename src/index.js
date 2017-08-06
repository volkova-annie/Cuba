import {h} from 'preact';
import {connect, Provider} from 'preact-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions';
import configureStore from './configure-store';
import initialState from './initial-state';
import {App} from './app'

const store = configureStore(initialState);
const ConnectedApp = connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App);

export default () =>
	<Provider store={store}><ConnectedApp /></Provider>
