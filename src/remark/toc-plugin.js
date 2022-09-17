// const plugin = (options = {}) => {
//     const name = options.name || 'toc';
  
//     const transformer = (node) => {
  
//       // Because frontmatter is not passed along we must use comments instead for config.
//       const firstComment = node.children.find(node => node.type === 'comment')
//       let config = {}
//       if (firstComment) {
//         config = require('json5').parse(firstComment.value)
//       }
//     }
// }
const visit = require('unist-util-visit');
const { writeFileSync } = require('fs');


function plugin(options){
  return function search(node) {
    const headings = [];
    const minDepth = 1;
    const maxDepth = 4;
    const current = Array(maxDepth - minDepth + 1).fill(-1);
    let previousDepth = 0;
    const onHeading = (child, index, parent) => {
      const value = toString(child);

      if (parent !== node || !value || child.depth > maxDepth || child.depth < minDepth) {
        return;
      }
  
      const entry = {
        value: toValue(child),
        id: child.data.id,
        children: [],
      };
  
      if (!headings.length || previousDepth >= child.depth) {
        previousDepth = child.depth;
        current.fill(-1, child.depth - minDepth + 1)
      }
  
      index = child.depth - minDepth;
      let table = headings;
      for(let i = 0; i < index; i++) {
        table = table[current[i]].children;
      }
      table.push(entry);
      current[index] += 1;
    };
  
    visit(node, 'heading', onHeading);
  
    return headings;
  }
}
  module.exports = plugin;

