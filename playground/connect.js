const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Users',function(err,db){
     if(err){
     	return console.log("unable to connect databse");
     }

     console.log("connect to database server");
  db.collection('register').insertOne({
  	name: "akash",
  	age : 23,
  	mobile : 8904420571,
  	address : "hsr layout"
  },function(err,result){
  	if (err) {
  		console.log("something went wrong");
  	}
  	 console.log(JSON.stringify(result.ops,undefined,4));
  });

   
  db.close();
});