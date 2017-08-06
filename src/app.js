import './global.css';
import {h, Component} from 'preact';
import {Footer} from '../components'

class App extends Component {
	render() {
    return <div id='app' onClick={this.props.actions.updateTest.bind(null, {hello: 'world'})}>
      hello!
      <Footer {...this.props} />
    </div>
  }
}

export {App}
