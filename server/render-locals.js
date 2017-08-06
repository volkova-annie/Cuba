import App from '../src'
import {h} from 'preact'
import renderToString from 'preact-render-to-string'

export function renderLocals() {
  const html = renderToString(<App />)

  return {html}
}
