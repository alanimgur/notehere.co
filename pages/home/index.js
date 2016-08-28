/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Editor from 'react-medium-editor'
import s from './styles.scss'

require('medium-editor/dist/css/medium-editor.css')
require('medium-editor/dist/css/themes/default.css')

class HomePage extends React.Component {
  constructor () {
    super()
    this.state = { text: '' }
  }

  componentWillMount () {
    this.setState({text: window.localStorage.getItem('text')})
  }

  componentDidMount () {
    var editor = ReactDOM.findDOMNode(this)
    editor.setAttribute('data-placeholder', 'Take note...')
  }

  handleChange (text) {
    window.localStorage.setItem('text', text)
  }

  render () {
    return (
      <Editor className={s.content} onChange={this.handleChange} text={this.state.text} />
    )
  }
}

export default HomePage
