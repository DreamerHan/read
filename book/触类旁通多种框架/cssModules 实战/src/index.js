import bluestyle from './style.css'
import greenstyle from './app.css'

let html = `
  <h2 class="${bluestyle.my_css_selector}">I should be display in blue.</h2>
  <h2 class="${greenstyle.my_css_selector}">I should be display in green.</h2> 
`

document.write(html)