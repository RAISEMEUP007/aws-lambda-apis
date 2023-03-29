var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3tB0AQxBizfnuk'}).base('appacqATjWbWXxFE9');
var async = require('async');
var request = require('request');

exports.handler = (event, context, callback) => {
  const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? err : JSON.stringify(res),
    headers: {
      'Content-Type': 'application/json',
    },
	});
	
	var result = {
		event: event,
		context: context
	};

	base('Order Items').create({
		"Name": event['Order Items'].Name,
		"Quantity": event['Order Items'].Quantity,
		"Curreny": event['Order Items'].Curreny,
		"Price": event['Order Items'].Price
	}, function(err, record1){
		if(err) {done(err); return;}

		base('Orders').find(event['Order ID'], function(err, record) {
			if (err) { console.error(err); return; }
			record.fields['Order Items'].push(record1.getId());
			base('Orders').update(event['Order ID'], {
				"Order Items": record.fields['Order Items'],
				"Order Total": record.fields["Order Total"] + event['Order Items'].Price * event['Order Items'].Quantity
			}, function(err, record2) {
				if(err) {done(err); return;}
			});
		});
	});
}