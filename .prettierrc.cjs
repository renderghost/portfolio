const { extendConfig } = require('@u3u/prettier-config/utils');

module.exports = extendConfig('@u3u/prettier-config/tw', {
  bracketSpacing: true,
  bracketSameLine: true,
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: `ignore`,
  jsxBracketSameLine: true,
  jsxSingleQuote: false,
  printWidth: 200,
  trailingComma: 'all',
  proseWrap: 'never',
  semi: false,
  singleQuote: true,
  tabWidth: 4,
});