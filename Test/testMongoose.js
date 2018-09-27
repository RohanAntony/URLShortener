let URLHelper = require('../models/URLHelper.js')

let Sample = {
  url: 'Testing',
  short: 'URL2',
  visits: 0
}

URLHelper.Insert(Sample, (obj)=> {
  console.log(obj)
  URLHelper.Find(Sample, (obj)=> {
    console.log(obj)
    URLHelper.FindURLById(Sample.short, (obj) => {
      console.log(obj)
      URLHelper.Remove(Sample, (obj) => {
        console.log(obj)
      })
    })
  })
})

URLHelper.SaveURL('http://google.com', '10101', (obj) => {
  console.log(obj)
})
