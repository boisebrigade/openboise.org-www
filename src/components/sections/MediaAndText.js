import React from 'react'

import Text from './Text'
import Media from './Media'

export default class extends React.Component {
  render() {
    const {
      media: media = null,
      text: text = null,
      display: display = "Text First",
      classes: classes = [],
    } = this.props


    if (display !== "Text First") {
      classes.push('md:flex-row-reverse')
    }

    return <div className={`flex sm:flex-col lg:flex-row h-full ${classes.join(" ")}`}>
      <div className="flex flex-col lg:w-1/2 justify-center sm:px-8 md:px-0">
        <Text content={text}/>
      </div>
      <div className="flex flex-col lg:w-1/2">
        <Media {...media}/>
      </div>
    </div>
  }
}
