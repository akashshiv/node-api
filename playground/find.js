const MongoClient = require('mongodb').MongoClient;

const ObjectID =require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/Users',function(err,db) {
	if (err) {
     return	console.log('unable to connect server');
	}
	console.log('connect Database server');


db.collection('register').find({_id : new ObjectID('597b277eee22e51fcc453396')}).toArray().then(function(result){
    console.log(JSON.stringify(result,undefined,2));
},function(err){
  console.log('unable to find data');
});
db.close();
});