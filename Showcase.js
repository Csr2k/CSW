var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

var peoples = [];

var index = 0;
	
app.use(express.static('public'))

router.route('/peoples')
	.get(function(req,res){
		res.json(peoples);
	})

	.post(function(req, res) {
		var pro = {};
		pro.id = index++;
		pro.name = req.body.name;
		pro.sex = req.body.sex;

		peoples.push(pro);
		res.json(peoples);
	})

router.route('/peoples/:pro_id')
	.get(function(req,res){
		res.json(peoples[req.params.pro_id]);
	})

	.put(function(req, res) {
		var id = req.params.pro_id
		peoples[id].name = req.body.name;
		peoples[id].sex= req.body.sex;

		
		res.json(peoples[req.params.pro_id]);
	})

	.delete(function(req,res){
		var id = req.params.pro_id
		delete peoples[id];	
	})

	.put(function(req,res){
		var id = req.params.pro_id
		peoples[id].name = req.body.name;
		peoples[id].sex= req.body.sex;

		
		// res.json(bears[id])
	})

	.delete(function(req,res){
		var id = req.params.pro_id
		delete peoples[id]
		// res.json(bears)
	})


// all of our routes will be prefixed with /api
app.use('/api',bodyParser.json(),router);

app.listen(50011);
console.log('web sarver is running...');