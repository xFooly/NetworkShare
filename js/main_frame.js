chrome.app.runtime.onLaunched.addListener(function() {

	console.log('Ciao')
  chrome.app.window.create('../html/window.html', {
    id: 'main',
    'bounds': {'width': 400, 'height': 500}
  });

  chrome.sockets.tcpServer.create({}, function(createInfo) {
    chrome.sockets.tcpServer.listen(createInfo.socketId, IP, PORT, function(resultCode) {
      onListenCallback(createInfo.socketId, resultCode)
    });
  });


});

chrome.runtime.onInstalled.addListener(function() {

});

chrome.app.runtime.onSuspend.addListener(function() {

})