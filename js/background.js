chrome.app.runtime.onLaunched.addListener(function() {

	console.log('Ciao')
  chrome.app.window.create('../html/window.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });

  chrome.sockets.tcpServer.create({}, function(info){
   chrome.sockets.tcpServer.listen(info.socketId, '127.0.0.1', 80, 2000,
      function(result){
    console.log(result);
   });
  });

});