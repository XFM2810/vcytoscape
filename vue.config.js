// vue.config.js
module.exports = {
  pages: {
    index: 'src/demos/default/main.js',
    toolbar: 'src/demos/toolbar/main.js',
    category: 'src/demos/category/main.js',
    legend: 'src/demos/legend/main.js',
    editable: 'src/demos/editable/main.js',
    integrate: 'src/demos/integrate/main.js'
  },
  css: {
    extract: false
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
      libraryTarget: 'umd'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vcytoscape/demo/'
    : '/', // GitHub Pages
  indexPath: 'index.html'
}
