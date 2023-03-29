var jwt = require('express-jwt');
var secret = require('../config').secret;

function getTokenFromHeader(req){
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
      req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

var auth = {
  required: jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
};

module.exports = auth;




////////////////////////////////////////////////////////////



/*  
  var request=require('request');

  var json = {
    "payment_method": {
      "credit_card": {
        "first_name": "Joe",
        "last_name": "Jones",
        "number": "5555555555554444",
        "phone_number":"1234567890",
        "verification_value": "423",
        "month": "3",
        "year": "2032",
        "street":"streetttt",
        "shipping_city": "hongkong",
        "shipping_zip": "83928",
        "shipping_country": "hongkong",
        "payment_method_type": "credit_card"      
      },
      "email": "joey@example.com"
    }
  };

  var username = 'CEKQ3KZYfHNHpPWPclE1vr06i6e';
  var password = 'p0YhsWh1DggGXSBhDC9T7uz2CXpAakC1K3laiJOpSMiLqJtqYU2NREtRivMES4Wl';
  var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

  console.log(auth);

  var options = {
    url: 'https://core.spreedly.com/v1/payment_methods.json',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':auth
    },
    json: json
  };

  request(options, function(err, res, body) {
    console.log('request finished');

      if (res && (res.statusCode === 200 || res.statusCode === 201)) {
        base('Payment').create({
          "Name":"Payment#4",
          // "Customer":"John Doe",
          "Payment ID":"PAY123A",
          "Token":body.transaction.payment_method.token,
          // "Type":"Spreedl  y"
          // "Order ID":"1"
        }, function(err, record) {
            if (err) { console.error(err); return; }
            console.log(record.getId());
        });
        console.log(body);
     }
     
  });

*/