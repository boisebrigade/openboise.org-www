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
      hideOrShow: hideOrShow = "Show Media and Text"
    } = this.props


    if (display !== "Text First") {
      classes.push('md:flex-row-reverse')
    }

    return <div className={`flex sm:flex-col lg:flex-row h-full ${classes.join(" ")}`}>
      <div className={`md:flex flex-col lg:w-1/2 justify-center sm:px-8 md:px-0 ${hideOrShow === "Hide Text" ? "sm:hidden": "sm:flex"}`}>
        <Text content={text}/>
      </div>
      <div className={`md:flex flex-col lg:w-1/2 ${hideOrShow === "Hide Media" ? "sm:hidden": "sm:flex"}`}>
        <Media {...media}/>
      </div>
    </div>
  }
}
