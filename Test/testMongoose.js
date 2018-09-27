let URLHelper = require('../models/URLHelper.js')

let Sample = {
  url: 'TestingUrl',
  short: 'URL1',
  visits: 0
}

URLHelper.Save(Sample, (obj)=> {
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
