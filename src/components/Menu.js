import React from 'react'

const MenuItem = props =>
  <li className={`inline-block ml-5`}>
    <a className="no-underline font-semibold text-lg text-charcoal" target="_blank" href={props.link}>{props.text}</a>
  </li>

const MobileMenuItem = props =>
  <li className='ml-2 mt-6 cursor-pointer h-full'>
    <a className="no-underline font-semibold text-lg text-charcoal" target="_blank" href={props.link}>{props.text}</a>
  </li>

export default class extends React.Component {
  render() {

    const {
      items: items = [],
      mobile: mobile = false,
    } = this.props



    return <ul className="list-reset">
      {items.map((item, i) => mobile ? <MobileMenuItem key={i} {...item}/> : <MenuItem key={i} {...item}/>)}
    </ul>
  }
}
