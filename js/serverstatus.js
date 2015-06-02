MinecraftAPI.getServerStatus(serverIP, {
    port: serverPort // optional, only if you need a custom port
  }, function (err, status) {
    $("#serverIP").html(serverIP);
    if (err) {
      return document.querySelector('.server-status').innerHTML = "Can't load status";
    }

    // you can change these to your own message!
    //document.querySelector('.server-online').innerHTML = status.online ? 'Online' : 'Offline';
    $("#serverStatus").html(status.online ? '<span class="label label-success">Server online</span>' : '<span class="label label-danger">Server offline</span>');
  });