import React from 'react'

import Container from './Container'
import Menu from './Menu'

export default class extends React.Component {
  render() {
    const {
      mainMenu: mainMenu = null,
    } = this.props;

    return <header className="sans-serif md:h-24 bg-white sm:px-8 sm:py-4">
      <Container padding="">
        <div className="flex justify-center">
          <div className="pv-3">
            <a className="block" href="/">
              <img src="/images/open-boise-logo.png"
                   srcSet="/images/open-boise-logo.png 1x, /images/open-boise-logo@2x.png 2x,/images/open-boise-logo@3x.png 3x" />
            </a>
          </div>

          <div className="ml-auto mv-0">
            <div className="sm:block md:hidden">
              <img src="/images/menu.svg" />
            </div>
            <div className="sm:hidden md:block">
              <Menu items={mainMenu} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  }
}



