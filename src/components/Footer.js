import React from 'react'

import Container from './Container'

export default class extends React.Component {
  render() {
    return <footer className="sans-serif mt-auto h-24 bg-white sm:px-8">
      <Container padding="">
        <div className="flex py-3 w-full">
          <div>
            <p>© 2019 Open Boise </p>
          </div>
          <div className="ml-auto">
            <ul className="list-reset">
              <li className="inline-block ml-3">
                <a target="_blank" href="https://www.meetup.com/boisebrigade/">
                  <img src="/images/social/meetup.svg" />
                </a>
              </li>
              <li className="inline-block ml-3">
                <a target="_blank" href="https://twitter.com/boisebrigade">
                  <img src="/images/social/twitter.svg" />
                </a>
              </li>
              <li className="inline-block ml-3">
                <a target="_blank" href="https://www.instagram.com/boisebrigade/">
                  <img src="/images/social/instagram.svg" />
                </a>
              </li>
              <li className="inline-block ml-3">
                <a target="_blank" href="https://boisebrigade.slack.com">
                  <img src="/images/social/slack.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  }
}






