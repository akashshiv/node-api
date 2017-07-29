const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users',function(err,db){
  if (err) {
  	console.log('unable to find server');
  }
   console.log('connect to database server');

db.collection('register').deleteMany({name:'viaksh'}).then(function(result){
	console.log(JSON.stringify(result,undefined,4));
  });
   db.close();
});