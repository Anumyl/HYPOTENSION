var net = require('net');
 var HOST = 'localhost'; 
 var PORT=65432;
 net.createServer(function(sock){
	 console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
	 sock.on('data', (msg)=>{
		 var m = msg.toString();
console.log(m);
		// console.log(msg);
		  //sock.write(data);
	 });
	 sock.on('close', function(data) {
		 console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
		 });
		 }).listen(PORT, HOST);
console.log('Server listening on ' + HOST +':'+ PORT);