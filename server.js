'use strict'
//dependencies
const express = require('express');


//global configuration
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
	const os = req.headers['user-agent'].match(/\(.*?\)/)[0]
	const result = {'IP Address':req.ip,
	'language':req.headers['accept-language'].split(',')[0],
	'OS':os.substr(1,os.length-2)
	 }
	res.send(result);
}).listen(PORT);
