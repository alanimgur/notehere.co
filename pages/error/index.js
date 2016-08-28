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
import history from '../../core/history'
import s from './styles.css'

class ErrorPage extends React.Component {

  static propTypes = {
    error: React.PropTypes.object
  }

  componentDidMount () {
    document.title = this.props.error && this.props.error.status === 404
      ? 'Page Not Found' : 'Error'
  }

  goBack = event => {
    event.preventDefault()
    history.goBack()
  }

  render () {
    if (this.props.error) console.error(this.props.error) // eslint-disable-line no-console

    const [code, title] = this.props.error && this.props.error.status === 404
      ? ['404', 'Page not found']
      : ['Error', 'Oups, something went wrong']

    return (
      <div/>
    )
  }

}

export default ErrorPage
