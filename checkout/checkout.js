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
  
  var username = 'CEKQ3KZYfHNHpPWPclE1vr06i6e';
  var password = 'p0YhsWh1DggGXSBhDC9T7uz2CXpAakC1K3laiJOpSMiLqJtqYU2NREtRivMES4Wl';
  var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
  var options = {
  	url: 'https://core.spreedly.com/v1/payment_methods.json',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':auth
    },
    json: event
  };

  request(options, function(err, res, body){
  	if(err) {
  		done(err);
  	} else {
  		if (res && (res.statusCode === 200 || res.statusCode === 201)) {
  			base('Customers').create({
			    "Name": event.Customers.Name,
			    "First Name": event.Customers["First Name"],
			    "Last Name": event.Customers["Last Name"],
			    "Email": event.Customers.Email,
			    "Phone": event.Customers.Phone,
			    "Address": event.Customers.Address,
			    "City": event.Customers.City,
			    "State": event.Customers.State,
			    "Country": event.Customers.Country,
			    "Postal Code": event.Customers["Postal Code"] 				
  			}, function(err, record1){
  				if(err) {done(err); return;}

  				base('Orders').create({
			      "Customer": [record1.getId()],
			      "Date": event.Orders.Date,
			      "Status": event.Orders.Status,
			      "Shipping": event.Orders.Shipping,
			      "Currency": event.Orders.Currency  					
			  	}, function(err, record2){
			  	if(err) {done(err); return; }

			  	async.map(event['Order Items'], function(orderItem) {
			  		base('Order Items').create({
			          "Name": orderItem.Name,
			          "Order": [record2.getId()],
			          // "Product": ["recjjWh9Mgf0Z5PkQ"],
			          "Quantity": orderItem.Quantity,
			          "Currency": orderItem.Currency,
			          "Price": orderItem.Price			  			
			  		}, function(err, record){
			  			if(err) {done(err); return;}
			  		});
			  	});

			  	base('Payment').create({
		          "Token": body.transaction.payment_method.token,
		          "Name": event.Payment.Name,
		          "Type": event.Payment.Type,
		          "Payment ID": event.Payment['Payment ID'],
		          "Customer": [record1.getId()],
		          "Order ID": [record2.getId()]			  		
			  	}, function(err, record) {
			  		if(err) {done(err); return;}
			  		else {
			  			done(null, record);
			  		}
			  	});
			  });
  			});
  		}
  	}
  });   	
}

