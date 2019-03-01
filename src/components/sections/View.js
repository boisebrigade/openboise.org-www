import React from 'react'


import BlogTile from '../tiles/Blog'
import ProjectTile from '../tiles/Project'

const View = props => {
  const blogClasses = [
    'md:w-1/3',
    'md:w-1/3',
    'md:w-1/3'
  ]

  const projectClasses = [
    'md:w-1/2 md:pt-8 md:pb-4 md:pr-4',
    'md:w-1/2 md:pt-8 md:pb-4 md:pl-4',
    'w-full md:py-8'
  ]


  const projectColors = [
    'bg-jungle-green',
    'bg-dark-green',
    'bg-mustard',
  ]

  const blogColors = [
    'bg-topaz',
    'bg-dark-grey-blue',
    'bg-darkish-blue',
  ]

  switch (props.__typename) {
    case "ContentfulProject":
      return <React.Fragment>
        <ProjectTile color={projectColors[props.index]} classes={projectClasses[props.index]} {...props} />
      </React.Fragment>
        case "ContentfulBlogPost":
      return <React.Fragment>
        <BlogTile color={blogColors[props.index]} classes={blogClasses[props.index]} {...props} />
      </React.Fragment>
    default:
      return null
  }
}

export default class extends React.Component {
  render() {
    const {
      view: [{
        __typename: typename = "ContentfulProject"
      }],
      view: views = []
    } = this.props

    return <div className="flex sm:flex-col md:flex-row md:flex-wrap">
      {views.map((props, i) => {
        return <View key={i} index={i} {...props} />
      })}
    </div>
  }
}
