import React from 'react'
import Text from '../sections/Text'

export default class extends React.Component {
  render() {
    const {
      title: title,
      slug: slug,
      teaser: teaser,
      classes: classes,
      color: color = "bg-topaz"
    } = this.props

    let path = slug.replace(/^\/+/g, '')

    if (path.indexOf('/') === 0) {
      path = `/project/${path}`
    }

    return <div className={`${classes}`}>
      <a className={`no-underline text-white shadow ${color} block py-8 sm:px-8 md:px-16 h-full flex flex-col`} href={path}>
        <h4 className="text-3xl font-bold pt-8 pb-4 block">{title}</h4>
        <Text content={teaser}/>
        <h5 className="text-xl font-bold py-4 block arrow md:mt-auto xl:mt-0">Read More About The Project</h5>
      </a>
    </div>
  }
}
