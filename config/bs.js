/**
 * BrowserSync config
 */
let bs = require("browser-sync").create()

bs.init({
  server: './',
  notify: false
})

// watch destination folder and reload on changes on any file
bs.watch('./dest/*.*').on('change', bs.reload)
bs.watch('./dest/**/*.*').on('change', bs.reload)
bs.watch('./*.html').on('change', bs.reload)
