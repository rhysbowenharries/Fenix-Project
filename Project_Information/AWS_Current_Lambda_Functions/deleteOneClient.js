'use strict';

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.deleteClient = function (event, context, callback) {
	console.log("event", event.id)
	const params = {
		TableName: process.env.TABLE_NAME,
		Key: { "id": event.id }
	};
	console.log("params", params)
	ddb.delete(params, function (err, data) {
		console.log("data", data)
		if (err) {
			callback(err, null);
		} else {
			callback(null, data.Item);
		}
	});
}