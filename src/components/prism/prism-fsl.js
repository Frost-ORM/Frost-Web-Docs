import Prism from 'prism-react-renderer/prism'
;(typeof global !== 'undefined' ? global : window).Prism = Prism
Prism.languages.fsl = Prism.languages.extend('clike', {
  keyword: /\b(?:enum|model|type)\b/,
  'type-class-name': /(\b()\s+)[\w.\\]+/,
})

Prism.languages.javascript['class-name'][0].pattern =
  /(\b(?:model|enum|type)\s+)[\w.\\]+/

Prism.languages.insertBefore('fsl', 'function', {
  annotation: {
    pattern: /(^|[^.])@+\w+/,
    lookbehind: true,
    alias: 'punctuation',
  },
})

Prism.languages.insertBefore('fsl', 'punctuation', {
  'type-args': /\b(?:name|path):/,
})

Prism.languages.json5 = Prism.languages.js