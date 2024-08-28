const twApi = require('./index')
setTimeout(async () => {
    a = await twApi('https://gift.truemoney.com/campaign/?v=019198162b787302be3ea8b57e74b4835at', '0660277429')
    console.log(a.status.code)
})
