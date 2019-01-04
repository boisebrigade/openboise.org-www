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


    const path = slug.replace(/^\/+/g, '')

    return <div className={`md:w-1/3 ${classes} md:pr-4 md:pt-8 md:pb-8`}>
      <a className={`no-underline text-white shadow-md py-8 px-8 block lg:h-96 sm:h-full ${color} flex flex-col`} href={`/blog/${path}`}>
        <h4 className="text-3xl font-bold py-4 block xl:h-1/3">{title}</h4>
        <div className="xl:h-1/3">
          <Text content={teaser}/>
        </div>
        <h5 className="text-xl font-bold py-4 block xl:h-1/3 arrow md:mt-auto xl:mt-0"> Read More </h5>
      </a>
    </div>
  }
}
