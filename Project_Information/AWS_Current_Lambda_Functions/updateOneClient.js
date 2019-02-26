'use strict';

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.updateClient = function (event, context, callback) {
   console.log("Event", event);
   const id = event.id;
   const address = event.address;
   const projects = event.projects;
   const params = {
      TableName: process.env.TABLE_NAME,
      Key: {
         "id": id
      },

      UpdateExpression: "set forename = :f, surname = :s, title = :t, dob = :d, gp = :g, phone = :p, email = :em, employment = :e, leavemessage = :msg, fromfeniks = :ff, mailing = :ma, forreview = :fr, address = :ad, projects = :pr",

      ExpressionAttributeValues: {
         ":f": event.forename,
         ":s": event.surname,
         ":t": event.title,
         ":d": event.dob,
         ":g": event.gp,
         ":p": event.phone,
         ":em": event.email,
         ":e": event.employment,
         ":msg": event.leavemessage,
         ":ff": event.fromfeniks,
         ":ma": event.mailing,
         ":fr": event.forreview,
         ":ad": event.address,
         ":pr": event.projects
      },
      ReturnValues: "UPDATED_NEW"

   };
   ddb.update(params, function (err, data) {
      if (err) {
         console.log("Error", err)
         callback(err, null);
      } else {
         callback(null, data.Item);
      }
   });
}