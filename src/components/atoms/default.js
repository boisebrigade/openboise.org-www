import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import React from 'react'

const defaultInline = (type, node) => {
  return <span>type: {type} id: {node.data.target.sys.id}</span>;
}

export const marks = {
  [MARKS.BOLD]: text => <b>{text}</b>,
  [MARKS.ITALIC]: text => <i>{text}</i>,
  [MARKS.UNDERLINE]: text => <u>{text}</u>,
  [MARKS.CODE]: text => <pre className="whitespace-pre-wrap">{text}</pre>,
};

export const blocks = {
  [BLOCKS.PARAGRAPH]: (node, next) => <p className="text-xl leading-normal opacity-80">{next(node.content)}</p>,
  [BLOCKS.HEADING_1]: (node, next) => <h1 className="text-5xl text-topaz font-extrabold md:whitespace-pre py-4">{next(node.content)}</h1>,
  [BLOCKS.HEADING_2]: (node, next) => <h2 className="text-4xl">{next(node.content)}</h2>,
  [BLOCKS.HEADING_3]: (node, next) => <h3 className="text-3xl">{next(node.content)}</h3>,
  [BLOCKS.HEADING_4]: (node, next) => <h4 className="text-2xl">{next(node.content)}</h4>,
  [BLOCKS.HEADING_5]: (node, next) => <h5 className="text-xl">{next(node.content)}</h5>,
  [BLOCKS.HEADING_6]: (node, next) => <h6 className="text-lg">{next(node.content)}</h6>,
  [BLOCKS.EMBEDDED_ENTRY]: (node, next) => <div>{next(node.content)}</div>,
  [BLOCKS.UL_LIST]: (node, next) => <ul>{next(node.content)}</ul>,
  [BLOCKS.OL_LIST]: (node, next) => <ol>{next(node.content)}</ol>,
  [BLOCKS.LIST_ITEM]: (node, next) => <li>{next(node.content)}</li>,
  [BLOCKS.QUOTE]: (node, next) => <blockquote className="text-5xl font-bold italic py-4 sm:text-center md:text-left"> “{node.content[0].content[0].value}”</blockquote>,
  [BLOCKS.HR]: () => <hr />,
  [BLOCKS.EMBEDDED_ASSET]: node => <img className="block py-4 sm:mx-auto md:mx-0" src={node.data.target.fields.file['en-US'].url} />,
  [INLINES.ASSET_HYPERLINK]: node => defaultInline(INLINES.ASSET_HYPERLINK, node),
  [INLINES.ENTRY_HYPERLINK]: node => defaultInline(INLINES.ENTRY_HYPERLINK, node),
  [INLINES.EMBEDDED_ENTRY]: node => defaultInline(INLINES.EMBEDDED_ENTRY, node),
  [INLINES.HYPERLINK]: (node, next) => <a className="text-xl text-grapefruit font-bold leading-tight no-underline my-4 block arrow" href={node.data.uri}>{next(node.content)}</a>,
};
