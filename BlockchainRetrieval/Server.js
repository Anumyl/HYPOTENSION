var http = require('http');
var net = require('net');
var HOST = 'localhost'; 
var PORT=65432;
var m;
const server =  net.createServer(function(sock){

		console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
		
		sock.on('data', (msg)=>{
		m=JSON.parse(msg);
		console.log(m);
				
		server.unref();
			 
		});
	 sock.on('error', function (err){
		 var ser = http.createServer(function(req, res) {

		            res.setHeader('Content-Type', 'application/json');
		            res.writeHead(200,{
					    'Content-Type': 'text/plain',
					    'Access-Control-Allow-Origin' : '*',
					    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
					});
		            res.end(
		             JSON.stringify(m)
		            );
		          });
				  ser.listen(PORT,HOST);
     	server.close();
    });

 }).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
/*var net = require('net');
var HOST = 'localhost'; 
var PORT=65432;

const server =  net.createServer((sock)=>{

		console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
		
		sock.on('data', (msg)=>{
			var obj = JSON.parse(msg);
			console.log("systolic : "+obj.SYSTOLIC_PRESSURE);
			console.log("diastolic : "+obj.DIASTOLIC_PRESSURE);
			console.log("Encrypted systolic : "+obj.ENC_SYSTOLIC_PRESSURE);
			console.log("Encrypted diastolic : "+obj.ENC_DIASTOLIC_PRESSURE);
			console.log("Encrypted map : "+obj.ENCRYPTED_MAP);
			console.log("Decrypted map : "+obj.DECRYPTED_MAP);
			console.log("Test Report : "+obj.TEST_REPORT);
			server.unref();
	 
		});
	 sock.on('error', function (err){
     	server.close();
    });

 }).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);*/