var express = require("express");
var app = express();
app.get("/api/whoami", function(req, res){
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	var ip = req.ip;
	var userAgent = req.headers["user-agent"];
	var lan = req.headers["accept-language"];
	res.send(JSON.stringify({'ip-address': ip, 'language': lan, 'software': userAgent}));
});

app.listen(process.env.PORT || 8000);