var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3tB0AQxBizfnuk'}).base('appacqATjWbWXxFE9');
var request = require('request');

exports.handler = (event, context, callback) => {
	const done = (err, res) => callback(null, {
		statusCode: err ? '400' : '200',
		body: err ? err : JSON.stringify(res),
		headers: {
		  'Content-Type': 'application/json',
		},
  });

  base('Order').find(event['Order ID'], function(err1, record1) {
		if(err1) { console.error(err1); return;}
		base('Payment').find(record1.Payment[0], function(err2, record2) {
			if(err2) { console.error(err2); return;}
			var json = {
        "transaction":{
          "payment_method_token": record2.fields.Token,
          "amount": record1.fields['Order Total'],
          "curreny_code": record1.fields.Curreny
        }
    	}

	    var username = 'CEKQ3KZYfHNHpPWPclE1vr06i6e';
	    var password = 'p0YhsWh1DggGXSBhDC9T7uz2CXpAakC1K3laiJOpSMiLqJtqYU2NREtRivMES4Wl';
	    var gateway_token = '';
	    var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
	    var options = {
	      url: 'https://core.spreedly.com/v1/gateways/' + gateway_token + '/purchase.json',
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json',
	        'Authorization':auth
	      },
	      json: json
	    };

    	request(options, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          if (res && (res.statusCode === 200 || res.statusCode === 201)) {
          	done(null, body);
          }
        }
    	});
		});
  });
}