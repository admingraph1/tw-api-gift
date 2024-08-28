const twApi = require('./index')
setTimeout(async () => {
    a = await twApi('https://gift.truemoney.com/campaign/?v=019198162b787302be3ea8b57e74b4835at', '0660277429')
    //console.log(a.status.code)
    console.log(a)
    //switch (a.status.code) {
            //case "SUCCESS":
                  //console.log('ได้รับเงินแล้วจำนวน'+a.data.my_ticket.amount_baht)
                  //break;
            //case "CANNOT_GET_OWN_VOUCHER":
                  //console.log('รับซองตัวเองไม่ได้')
                  //break;
            //case "TARGET_USER_NOT_FOUND":
                  //console.log('ไม่พบเบอร์นี้ในระบบ')
                  //break;
            //case "INTERNAL_ERROR":
                  //console.log('ไม่ซองนี้ในระบบ หรือ URL ผิด')
                  //break;
            //case "VOUCHER_OUT_OF_STOCK":
                  //console.log('มีคนรับไปแล้ว')
                  //break;
            //case "VOUCHER_NOT_FOUND":
                  //console.log('ไม่พบซองในระบบ')
                  //break;
            //case "VOUCHER_EXPIRED":
                  //console.log('ซองวอเลทนี้หมดอายุแล้ว')
                  //break;
            //default:
                  //break;
      //}
})