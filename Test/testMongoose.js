let URLHelper = require('../models/URLHelper.js')

let Sample = {
  url: 'Testing',
  short: 'URL2',
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
