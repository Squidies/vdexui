const fs = require('fs')
const sass = require('node-sass')

const output = 'nested'

sass.render({
  file: 'src/styles.scss',
  outputStyle: output
  },
  (err, result) => {
    if (err) console.log(err)
    else {
      let css = result.css.toString()
      fs.writeFile('dest/styles.css', css, () => {
        console.log('CSS Compiled')
      })
    }
  })
