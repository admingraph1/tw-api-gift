const twApi = require('./index2')
setTimeout(async () => {
    a = await twApi('https://gift.truemoney.com/campaign/?v=???', '066')
    console.log(a.status.code)
})
