import React from 'react'
import escape from 'escape-html';

import { helpers } from '@contentful/rich-text-types';

import {marks, blocks} from '../atoms/default'

/**
 * Serialize a Contentful Rich Text `document` to JSX.
 */
export function documentToJSX(richTextDocument, options = {}) {
  return nodeListToJSX(richTextDocument.content, {
    renderNode: {
      ...options.blocks,
    },
    renderMark: {
      ...options.marks,
    },
  });
}

function nodeListToJSX(nodes, { renderNode, renderMark }) {
  return nodes.map(node => nodeToJSX(node, { renderNode, renderMark }));
}

function nodeToJSX(node, { renderNode, renderMark }) {
  if (helpers.isText(node)) {
    const nodeValue = escape(node.value);
    if (node.marks.length > 0) {
      return node.marks.reduce((value, mark) => {
        if (!renderMark[mark.type]) {
          return value;
        }
        return renderMark[mark.type](value);
      }, nodeValue);
    }

    return nodeValue;
  } else {
    const nextNode = nodes => nodeListToJSX(nodes, { renderMark, renderNode });
    if (!node.nodeType || !renderNode[node.nodeType]) {
      return null;
    }
    return renderNode[node.nodeType](node, nextNode);
  }
}

export default class extends React.Component {
  render() {
    const {
      content: {
        childContentfulRichText: {
          internal: {
            content: content
          }
        }
      },
      classes: classes = [],
      blocks: blockAtoms = blocks,
      marks: markAtoms = marks,
    } = this.props

    const JSONContent = JSON.parse(content);
    const article = documentToJSX(JSONContent, {blocks: blockAtoms, marks: markAtoms});

    return <div className={classes.join(" ")}>
      {article}
    </div>;
  }
}
