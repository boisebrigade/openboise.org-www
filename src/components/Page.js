import React from 'react'

export default class extends React.Component {
  render() {
    const {
      header: header = null,
      main: main = null,
      footer: footer = null
    } = this.props;

    return <React.Fragment>
      {
        header ? <header>
          {header}
        </header> : null
      }
      {
        main ? <main>
          {main}
        </main> : null
      }
      {
        footer ? <footer>
          {footer}
        </footer> : null
      }
    </React.Fragment>
  }
}
