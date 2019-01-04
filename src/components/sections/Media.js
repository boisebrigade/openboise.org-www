import React from 'react'

export default class extends React.Component {
  render() {
    const {
      title: title = "",
      description: description = "",
      file: {
        url: href = ""
      },
    } = this.props


    return <img alt={description} title={title} src={href}/>
  }
}
