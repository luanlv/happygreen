var api_key = 'key-b27916a12645e658b1de91b9620f85fd';
var domain = 'mg.vnguy.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


const from = 'Thông báo từ Happy green market <phuongnguyen@happygreenmarket.com.vn>'

const NewOrderMail = function(email, name, phone, address) {
  return {
    from: from,
    to: email,
    subject: `Có đơn hàng từ ${name}, SĐT: ${phone}`,
    text: `Có đơn hàng mới: Họ tên: ${name}, SĐT: ${phone}, Địa chỉ: ${address}`
  }
}


const NewMesMail = function(adminEmail, email, name, phone, chude, tinnhan) {
  return {
    from: from,
    to: adminEmail,
    subject: `Có tin nhắn từ ${name}, SĐT: ${phone}, Email: ${email}, Chủ đề: ${chude}`,
    text: `Tin nhắn: ${tinnhan}`
  }
}


let Mailer = {}

Mailer.sendNewOrderMail = function (email, name, phone, address) {
  // console.log('send new email:', email)
  // console.log(NewOrderMail(email, name, phone))
  mailgun.messages().send(NewOrderMail(email, name, phone, address), function (error, body) {
    if(error) console.log(error)
    else {
      console.log(body);
    }
  });
}


Mailer.sendNewMesMail = function (adminEmail, email, name, phone, chude, tinnhan) {
  // console.log('send new email:', email)
  // console.log(NewOrderMail(email, name, phone))
  mailgun.messages().send(NewMesMail(email, name, phone, chude, tinnhan), function (error, body) {
    if(error) console.log(error)
    else {
      console.log(body);
    }
  });
}

module.exports = Mailer
