import React from 'react'

import Container from './Container'
import Menu from './Menu'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMobileMenu: false
    }
  }

  toggleMobileMenu() {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    })
  }

  render() {
    const {
      mainMenu: mainMenu = null,
    } = this.props;

    return <React.Fragment>
      <header className="sans-serif md:h-24 bg-white sm:px-8 sm:py-4 pt-3">
        <Container padding="">
          <div className="flex justify-center items-center">
            <a className="flex" href="/">
              <img className="h-10" src="/images/open-boise.svg" />
            </a>
            <div className="ml-auto mv-0">
              <div className="sm:block md:hidden">
                <img src="/images/menu.svg" onClick={this.toggleMobileMenu.bind(this)}/>
              </div>
              <div className="sm:hidden md:block">
                <Menu items={mainMenu} />
              </div>
            </div>
          </div>
        </Container>

      </header>
      {this.state.showMobileMenu ?
        <div className='bg-light-grey sm:px-8 sm:pb-4'>
          <Menu mobile={true} items={mainMenu} />
        </div>
        : null
      }
    </React.Fragment>
  }
}



