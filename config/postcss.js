const fs = require('fs')
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')
const cssnano = require('cssnano')
const postcss = require('postcss')

const plugins = [ autoprefixer,
                  mqpacker ]

// add cssnano (minification) to postcss plugins array
if(process.env.NODE_ENV === 'production') {
  plugins.push(cssnano)
}

fs.readFile('dest/styles.css', (err, css) => {

  if (err) throw err

  postcss(plugins)
    .process(css, {from: 'dest/styles.css', to: 'dest/styles.min.css'})
    .then(function (result) {
      result.warnings().forEach(function (warn) {
          console.warn(warn.toString() || 'G2G')
      });
      fs.writeFile('dest/styles.min.css', result.css, (err) => {
        if(err) console.log(err)
      })
      fs.unlink('dest/styles.css', console.log('POSTCSS COMPLETE'))
  })

})
