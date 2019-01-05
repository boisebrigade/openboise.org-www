import React from 'react'
import Helmet from 'react-helmet'

export default class extends React.Component {
  render() {
    const {
      title: title = null,
      description: description = null,
    } = this.props;

    return <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: description }]}
        title={title}
        link={[
          { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,500i,600,700,900", },
          { rel: "icon", type: "image/png", href: "images/favicon/open-boise.png" }
        ]}
      />
  }
}



