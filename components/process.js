const fs = require('fs').promises
const parse5 = require('parse5')
const { parse } = require('node-html-parser')

const process = async () => {
  const file = await fs.readFile('idea.html', { encoding: 'utf-8'})
  console.log('file', file)
  const documentFragment = parse(file, {
    script: true,            // retrieve content in <script> (hurt performance slightly)
    style: true,             // retrieve content in <style> (hurt performance slightly)
    pre: true                // retrieve content in <pre> (hurt performance slightly)
  });
  console.log('doc', documentFragment.childNodes.length)
  const fragments = {}
  documentFragment.childNodes.forEach(element => {
    console.log('el', element)
    if (element.tagName === 'template') {
      fragments[element.tagName] = element.innerHTML
    } else if (element.tagName) {
      fragments[element.tagName] = element.structuredText
    }

  })

  console.log('THen frags', fragments)
}

process().then(()=> {
  console.log('done')
})