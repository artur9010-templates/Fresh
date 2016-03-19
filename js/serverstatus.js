MinecraftAPI.getServerStatus(config["status.ip"], {
    port: config["status.port"] // optional, only if you need a custom port
}, function (err, status) {

    if(config["status.enable"]){
        var displayIP = config["status.ip"];
        // Display port if other than 25565
        if (config["status.port"] != 25565) {
            displayIP += ":" + config["status.port"];
        }

        $("#serverIP").html("<input class=\"mc-input\" value='" + displayIP + "' disabled>");
        if (err) {
            $("#serverStatus").html("<span class=\"label label-danger\">Error :<</span>");
            return;
        }

        // you can change these to your own message!
        $("#serverStatus").html(status.online ? "<span class=\"label label-success\">Server online!</span>" : "<span class=\"label label-danger\">Ugh... server offline.</span>");
    }else{
        $("#status").hide();
    }
});