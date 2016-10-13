/*
Language: Haxe
Author: Christopher Kaster <ikasoki@gmail.com> (Based on the actionscript.js language file by Alexander Myadzel)
*/

function(hljs) {
  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

  return {
    aliases: ['hx'],
    keywords: {
      keyword:
        'break callback case cast catch class continue default do dynamic else enum extends extern ' +
        'for function here if implements import in inline interface never new override package private ' +
        'public return static super switch this throw trace try typedef untyped using var while',
      literal:
        'true false null',
      built_in:
        'Array ArrayAccess Bool Class Date DateTools Dynamic EReg Enum EnumValue Float Int IntIterator ' +
        'Iterable Iterator Lambda List Map Math Null Reflect Single Std String StringBuf StringTools Sys ' +
        'Type UInt ValueType Void Xml XmlType'
    },
    contains: [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'class',
        beginKeywords: 'class interface', end: '{', excludeEnd: true,
        contains: [
          {
            beginKeywords: 'extends implements'
          },
          hljs.TITLE_MODE
        ]
      },
      {
        className: 'meta',
        begin: '#', end: '$',
        keywords: {'meta-keyword': 'if else elseif end error'}
      },
      {
        className: 'function',
        beginKeywords: 'function', end: '[{;]', excludeEnd: true,
        illegal: '\\S',
        contains: [
          hljs.TITLE_MODE,
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            contains: [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            begin: ':\\s*' + IDENT_FUNC_RETURN_TYPE_RE
          }
        ]
      }
    ]
  };
}
