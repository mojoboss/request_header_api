var express = require("express");
var app = express();

app.use(express.static("public/"));

app.get("/", function(req, res){
	req.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	res.send("index.html");
});

app.get("/api/whoami", function(req, res){
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	var ip = req.ip;
	var userAgent = req.headers["user-agent"];
	var lan = req.headers["accept-language"];
	res.send(JSON.stringify({'ip-address': ip, 'language': lan, 'software': userAgent}));
});

app.listen(process.env.PORT || 8000);
