const strictGlobal = false;
const scriptText = `const a = 123;window.a = 4`;
const sourceUrl = '//# sourceURL=http://localhost:7100/static/js/bundle.js\n';
const text = strictGlobal
  ? ';(function(window, self, globalThis){with(window){;'
      .concat(scriptText, '\n')
      .concat(sourceUrl, '}}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);')
  : ';(function(window, self, globalThis){;'
      .concat(scriptText, '\n')
      .concat(sourceUrl, '}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);');
console.log(text);
