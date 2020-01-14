(async () => {
  const { readFile, writeFile } = require('fs').promises
  const filePath = 'out/index.html'
  const orgCsp = `<meta http-equiv="Content-Security-Policy" content="default-src &#x27;none&#x27;; script-src &#x27;self&#x27;; style-src &#x27;self&#x27; &#x27;unsafe-inline&#x27; https://fonts.googleapis.com; connect-src &#x27;self&#x27; https://amplitude.nav.no; object-src &#x27;none&#x27;; img-src &#x27;self&#x27; data:; font-src &#x27;self&#x27; https://fonts.gstatic.com;"/>`
  const newCsp = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; connect-src 'self' https://amplitude.nav.no; object-src 'none'; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com;"/>`
  const data = await readFile(filePath, 'utf-8')
  const document = data.replace(orgCsp, newCsp)
  await writeFile(filePath, document, 'utf-8')
})()