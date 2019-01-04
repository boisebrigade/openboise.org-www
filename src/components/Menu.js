import React from 'react'

const MenuItem = props =>
  <li className="inline-block ml-5"> <a className="no-underline font-semibold text-lg text-charcoal" href={props.link}>{props.text}</a> </li>

export default class extends React.Component {
  render() {

    const {
      items: items = []
    } = this.props


    return <ul className="list-reset">
      {items.map((item, i) => <MenuItem key={i} {...item}/>)}
    </ul>
  }
}
